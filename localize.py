import sys
import os
import shutil
import polib
import datetime
import codecs
import requests
import subprocess
from requests.auth import HTTPBasicAuth
from tempfile import TemporaryFile

_locale = 'ja'
#_dir = 'content'
_output = 'po'
_localized = 'content/%s' % (_locale)

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

def md_2_pot(dir, src, out_path):
    '''
    Take a src text/md file, split it into paragraphs and generate a matching .pot file
    '''
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

def create_pots(dir, out_path):
    shutil.rmtree(out_path)

    '''Update source .pot files from markdown'''
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".md"):
                print("md_2_pot: " + path)
                short_path = path.replace(dir + '/', "") # remove dir from path
                md_2_pot(dir, short_path, out_path)

def update_localized_files(lang, dir, out_dir):
    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            path = os.path.join(dirpath, filename)
            if path.endswith(".po"):
                out_path = os.path.join(out_dir, path.replace(dir+'/', '').replace('.'+lang, "")).replace(".po", ".md")
                print("po_2_md: " + path)
                po_2_md(path, out_path)

# def create_empty_po_files(lang, dir):
#     '''duplicate a POT file into an PO file for the specified lang. You shouldn't need this.'

#     for (dirpath, dirnames, filenames) in os.walk(dir):
#         for filename in filenames:
#             path = os.path.join(dirpath, filename)
#             if path.endswith(".pot"):
#                 dst = path.replace(".pot", ".%s.po" % (lang))
#                 shutil.copy(path, dst)

def _generate_resource_slug(project, path):
    return "%s.%s" % (project, path.replace("/", '-').replace(".pot", ""))

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
                print(r)

def tx_push():
    cmd = ['tx', 'push', '-s']
    r = subprocess.check_output(cmd)
    print(r)

def tx_pull():
    cmd = ['tx', 'pull', '-a']
    r = subprocess.check_output(cmd)
    print(r)

#create_pots('content/en', 'po')
#create_empty_po_files('ja_JP', 'po')
#tx_set('po')
#tx_push()
#tx_pull()
#update_localized_files('ja_JP', 'po', 'content/ja')

if 'gettext' in sys.argv:
    print("gettext strings from source markdown")
    create_pots('content/en', 'po')

if 'set' in sys.argv:
    print("update tx config")
    tx_set('po')

if 'pull' in sys.argv:
    print("pull new localization files from transifex")
    tx_pull()

if 'push' in sys.argv:
    print("push current source to transifex")
    tx_push()

if 'update' in sys.argv:
    print("convert current translations to markdown")
    update_localized_files('ja_JP', 'po', 'content/ja')
