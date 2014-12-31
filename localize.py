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
from requests.auth import HTTPBasicAuth
from tempfile import TemporaryFile

_verbose = False

def split_to_para(f):
    paras = []
    para = ''

    linecount = 0
    for line in f:
        if not line or line.isspace():
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

def new_pot_file():
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

def md_2_pot(dir, src, out_path):
    '''
    Take a src text/md file, split it into paragraphs and generate a matching .pot file
    '''
    po = new_pot_file()

    src_path = os.path.join(dir, src)
    with codecs.open(src_path, 'r', 'utf-8') as f:
        paras = split_to_para(f)

        for para in paras:
            entry = po.find(para['msg'])
            if entry:
                # for duplicates add to occurrences
                entry.occurrences.append((src_path, para['line']))
            else:
                entry = polib.POEntry(
                    msgid=para['msg'],
                    msgstr=para['msg'],
                    occurrences=[(src_path, para['line'])]
                )
                po.append(entry)

    (base, ext) = os.path.splitext(os.path.join(out_path, src))
    po_path = base + '.pot'
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
                'msgstr': entry.msgstr,
                'line': int(occ[1])
            })

    ordered = sorted(strings, key=lambda k: k['line'])

    dir = os.path.dirname(out_path)
    if not os.path.exists(dir):
        os.makedirs(dir)

    with open(out_path, 'w') as f:
        for para in ordered:
            f.write(para['msgstr'].encode('utf-8'))
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

    with open(out_path, 'w') as f:
        f.write(output)

def get_title(path):
    with codecs.open(path, 'r', 'utf-8') as f:
        for (count, line) in enumerate(f.readlines()):
            m = re.match("title:(.*)", line)
            if m:
                return (m.groups(0)[0].strip(), path, count)

def create_pots(dir, out_path):
    shutil.rmtree(out_path, True)

    '''Update source .pot files from markdown'''
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".md"):
                if _verbose:
                    print("md_2_pot: " + path)
                short_path = path.replace(dir + '/', "") # remove dir from path
                md_2_pot(dir, short_path, out_path)

def create_title_pot(dir, out_file):
    titles = []

    '''Update source .pot files from markdown'''
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".md"):
                titles.append(get_title(path))

    pot = new_pot_file()
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

def update_localized_files(lang, dir, out_dir):
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".js.%s.po" % (lang)):
                out_path = os.path.join(out_dir, path.replace(dir+'/', '').replace('.'+lang, "")).replace(".po", ".json")
                if _verbose:
                    print("po_2_js: " + path)
                po_2_js(path, out_path)
            elif path.endswith(".po"):
                out_path = os.path.join(out_dir, path.replace(dir+'/', '').replace('.'+lang, "")).replace(".po", ".md")
                if _verbose:
                    print("po_2_md: " + path)
                po_2_md(path, out_path)

def _generate_resource_slug(project, path):
    # WARNING - becareful editing this, it defines the link between md file and server resource
    return "%s.%s" % (project, path.replace(".pot", "").replace("/", '-').replace(".", "-"))

def tx_set(dir):
    '''initialize a tx project from the source .pot files'''
    project = "playcanvas-developer-site"
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".pot"):
                resource = _generate_resource_slug(project, path)
                expr = path.replace(".pot", ".<lang>.po")
                cmd = ['tx', 'set', '--auto-local', '-r', resource, expr, '--type', 'PO', '--source-lang', 'en', '--source-file', path, '--execute']
                r = subprocess.check_output(cmd)
                if _verbose:
                    print(r)

def tx_push():
    cmd = ['tx', 'push', '-s']
    r = subprocess.check_output(cmd)
    if _verbose:
        print(r)

def tx_pull():
    cmd = ['tx', 'pull', '-a']
    r = subprocess.check_output(cmd)
    if _verbose:
        print(r)

#create_pots('content/en', 'po')
#create_empty_po_files('ja_JP', 'po')
#tx_set('po')
#tx_push()
#tx_pull()
#update_localized_files('ja_JP', 'po', 'content/ja')

for arg in sys.argv[1:]:
    if arg == 'gettext':
        print("gettext strings from source markdown")
        create_pots('content/en', 'po')
        create_title_pot('content/en', 'po/titles.js.pot')

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
