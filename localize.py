"""
After making changes to the source (english) markdown content.

`python localize.py gettext push`

Or if you have added new files:

`python localize.py gettext set push`

To get the latest translations from the transifex server

`python localize.py pull update`

"""

import sys
import os
import re
import shutil
import polib
import datetime
import codecs
import requests
import subprocess
import hashlib
import pylev
from requests.auth import HTTPBasicAuth
from tempfile import TemporaryFile

_verbose = False

def split_to_para(f):
    paras = []
    para = ''

    in_code = False # look for lines starting with ~~~ or ```, keep code between lines starting with ~~~ or ```in the same para

    linecount = 0
    for line in f:
        if line.startswith("~~~") or line.startswith("```"):
            in_code = not in_code

        if not in_code and (not line or line.isspace()):
            if para:
                paras.append({
                    'msg': para.rstrip(),
                    'line': linecount
                })
                para = ''
        else:
            para += line

        linecount += 1

    if para and not para.isspace():
        paras.append({
            'msg': para.rstrip(),
            'line': linecount
        })

    return paras

def hash(content):
    h = hashlib.md5()
    h.update(content.encode('utf-8'))
    return h.hexdigest()

def new_po_file():
    now = datetime.datetime.utcnow()
    isonow = now.isoformat()

    po = polib.POFile()
    po.metadata = {
        'Project-Id-Version': '1.0',
        'Report-Msgid-Bugs-To': 'dave@playcanvas.com',
        'POT-Creation-Date': isonow,
        'PO-Revision-Date': isonow,
        'MIME-Version': '1.0',
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Transfer-Encoding': '8bit',
    }

    return po

def md_2_po(dir, src, lang, out_path):
    '''
    Take a src text/md file, split it into paragraphs and generate a matching .po file
    '''
    po = new_po_file()

    src_path = os.path.join(dir, src)
    with codecs.open(src_path, 'r', 'utf-8') as f:
        paras = split_to_para(f)

        for para in paras:
            #msgid = hash(para['msg'])
            msgid = para['msg']
            entry = po.find(msgid)
            if entry:
                # for duplicates add to occurrences
                entry.occurrences.append((src_path, para['line']))
            else:
                entry = polib.POEntry(
                    msgid=msgid,
                    msgstr=para['msg'],
                    occurrences=[(src_path, para['line'])]
                )
                po.append(entry)

    (base, ext) = os.path.splitext(os.path.join(out_path, src))
    po_path = "%s.%s.po" % (base, lang)
    dir = os.path.dirname(po_path)
    if not os.path.exists(dir):
        os.makedirs(dir)

    po.save(po_path)

def po_2_md(po_path, out_path):
    '''
    Load .po file and generated a md file of the translations.
    Each msg is separated by \n\n
    '''
    pofile = polib.pofile(po_path)

    output = ''
    strings = []

    for entry in pofile:
        for occ in entry.occurrences:
            strings.append({
                'msgid': entry.msgid,
                'msgstr': entry.msgstr,
                'line': int(occ[1])
            })

    ordered = sorted(strings, key=lambda k: k['line'])

    dir = os.path.dirname(out_path)
    if not os.path.exists(dir):
        os.makedirs(dir)

    with open(out_path, 'w') as f:
        for para in ordered:
            msg = para['msgstr'].encode('utf-8')
            if msg:
                f.write(msg)
            else:
                # no data? use default original
                f.write(para['msgid'].encode('utf-8'))
            f.write('\n\n')

def po_2_js(po_path, out_path):
    pofile = polib.pofile(po_path)

    output = "{\n"

    entries = [entry for entry in pofile]
    for (count,entry) in enumerate(entries):
        if count < len(entries)-1:
            output = output + '    "%s": "%s",\n' % (entry.msgid, entry.msgstr)
        else:
            output = output + '    "%s": "%s"\n' % (entry.msgid, entry.msgstr)
    output = output + "}"

    with codecs.open(out_path, 'w', 'utf-8') as f:
        f.write(output)

def po_2_pot(po_path, pot_path):
    pofile = polib.pofile(po_path)
    if not os.path.exists(pot_path):
        # pot file doesn't exist, copy po
        pofile.save(pot_path)
        return

    potfile = polib.pofile(pot_path)
    for entry in pofile:
        pot_entry = potfile.find(entry.msgid)
        if pot_entry:
            # update potfile msgstr to match pofile
            pot_entry.msgstr = entry.msgstr
        if not pot_entry:
            # add new entry from pofile to potfile
            pot_entry = polib.POEntry(
                msgid = entry.msgid,
                msgstr = entry.msgstr,
                occurrences= entry.occurrences
            )
            potfile.append(pot_entry)
    potfile.save(pot_path)

# def compare_and_update(po_path, pot_path):
#     """
#     compare entries in the po file (for source language)
#     with entries in the pot file. If they are similar enough
#     update the po file to use the new msgstr with the old msgid.
#     This maintains strings across updates
#     """
#     min = 1
#     # for (dirpath, dirnames, filenames) in os.walk(dir):
#     #     for filename in filenames:
#     #         path = os.path.join(dirpath, filename)
#     #         if path.endswith(".en-US.po"):
#     #             po_path = path
#     #             pot_path = path.replace(".en-US.po", ".pot")

#     pofile = polib.pofile(po_path)
#     potfile = polib.pofile(pot_path)

#     pot = {}
#     for entry in potfile:
#         pot[entry.msgid] = entry.msgstr

#     for poentry in pofile:
#         for (_id, _str) in pot.items():
#             v = float(pylev.levenschtein(poentry.msgstr, _str)) / float(len(poentry.msgstr))
#             existing = poentry.msgid in pot
#             if not existing and _id != poentry.msgid and v < 1:
#                 print(v)
#                 print("%s:%s" % (_id, poentry.msgid))
#                 print("%s\n%s" % (_str, poentry.msgstr))

def get_title(path):
    with codecs.open(path, 'r', 'utf-8') as f:
        for (count, line) in enumerate(f.readlines()):
            m = re.match("title:(.*)", line)
            if m:
                return (m.groups(0)[0].strip(), path, count)

def create_src_po(dir, out_path):
    #shutil.rmtree(out_path, True)

    '''Update source .po files from markdown'''
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            # delete src files "filename.en-US.po"
            if path.endswith(".en-US.po"):
                os.remove(path)
            # for each .md file create a new .en-US.po file
            if path.endswith(".md"):
                if _verbose:
                    print("md_2_po: " + path)
                short_path = path.replace(dir + '/', "") # remove dir from path
                md_2_po(dir, short_path, "en-US", out_path)

def update_pot_from_src_po(dir):
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            # for each .en-US.po file, duplicate into a .pot file
            if path.endswith(".en-US.po"):
                if _verbose:
                    print("po_2_pot: " + path)
                po_2_pot(path, path.replace(".en-US.po", ".pot"))

def create_title_pot(dir, out_file):
    '''
    Create extra file just containing the titles of each markdown file.
    Required to do specific translations for the navigation menus.
    '''
    titles = []

    '''Update source .pot files from markdown'''
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".md"):
                titles.append(get_title(path))

    pot = new_po_file()
    for (title, path, line) in titles:
        entry = pot.find(title)
        if entry:
            # for duplicates add to occurrences
            entry.occurrences.append((path, line))
        else:
            entry = polib.POEntry(
                msgid=title,
                msgstr=title,
                occurrences=[(path, line)]
            )
            pot.append(entry)

    pot.save(out_file)

def general_messages(in_file, out_file):
    with codecs.open(in_file, "r", 'utf-8') as _in:
        po = new_po_file()
        for (index, line) in enumerate(_in.readlines()):
            entry = polib.POEntry(
                msgid=line,
                msgstr=line,
                occurrences=[(in_file, index)]
            )
            po.append(entry)

        po.save(out_file)

def update_localized_files(lang, dir, out_dir):
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".js.%s.po" % (lang)):
                out_path = os.path.join(out_dir, path.replace(dir+'/', '').replace('.'+lang, "")).replace(".po", ".json")
                if _verbose:
                    print("po_2_js: " + path)
                po_2_js(path, out_path)
            elif path.endswith(".po") and path.find(lang) >= 0:
                out_path = os.path.join(out_dir, path.replace(dir+'/', '').replace('.'+lang, "")).replace(".po", ".md")
                if _verbose:
                    print("po_2_md: " + path)
                po_2_md(path, out_path)

def _generate_resource_slug(project, path):
    # WARNING - be careful editing this, it defines the link between md file and server resource
    return "%s.%s" % (project, path.replace(".pot", "").replace(".en-US.po", "").replace("/", '-').replace(".", "-"))

def tx_set(dir):
    '''initialize a tx project from the source .pot files'''
    project = "playcanvas-developer-site"
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".en-US.po"):
                resource = _generate_resource_slug(project, path)
                expr = path.replace(".en-US.po", ".<lang>.po")
                cmd = ['tx', 'set', '--auto-local', '-r', resource, expr, '--type', 'PO', '--source-lang', 'en', '--source-file', path, '--execute']
                r = subprocess.check_output(cmd)
                if _verbose:
                    print(r)

def tx_push():
    '''push pot files to transifex'''
    cmd = ['tx', 'push', '-s']
    r = subprocess.check_output(cmd)
    if _verbose:
        print(r)

def tx_pull():
    '''pull all from transifex'''
    cmd = ['tx', 'pull', '-a']
    r = subprocess.check_output(cmd)
    if _verbose:
        print(r)

for arg in sys.argv[1:]:
    if arg == 'gettext':
        print("gettext strings from source markdown")
        create_src_po('content/en', 'po')
        create_title_pot('content/en', 'po/titles.js.en-US.po')
        general_messages('messages.txt', 'po/messages.txt.en-US.po')
        # update_pot_from_src_po('po')

    if arg == 'set':
        print("update tx config")
        tx_set('po')

    if arg == 'pull':
        print("pull new localization files from transifex")
        tx_pull()

    if arg == 'push':
        print("push current source to transifex")
        tx_push()

    if arg == 'update':
        print("convert current translations to markdown")
        update_localized_files('ja_JP', 'po', 'content/ja')
        update_localized_files('ru', 'po', 'content/ru')

    if arg == 'titles':
        create_title_pot('content/en', 'po/titles.js.en-US.po')

    if arg == 'messages':
        general_messages('messages.txt', 'po/messages.txt.en-US.po')

