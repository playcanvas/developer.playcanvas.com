'''
Generate the downloads.yaml file with a list of the contents of the code.playcanvas.com root containing all builds of the engine
'''
import sys
import os
import re
from distutils.version import StrictVersion

def get_file_list(path):
    '''generate a list of all builds of the engine'''
    
    files = []
    for file in os.listdir(path):
        if file.endswith(".js"):
            files.append(file)
    
    return files

def run(path, output):
    results = []
    d = {}
    
    files = get_file_list(path)
    
    r = re.compile("playcanvas-(.+?)(.min)?.js")
    
    for file in files:
        m = r.match(file)
        if m:
            version = m.group(1)
            if version in ['stable', 'latest']:
                continue
            if not version in d:
                d[version] = []
            d[version].append(file)
            
    
    results.sort(key = lambda x: StrictVersion(x['version']), reverse=True)
    
    write(d, output)

def write_entry(f, version, compressed, uncompressed):
    s = """  - version: %s\n""" % (version)

    s = s + "    compressed: 'http://code.playcanvas.com/%s'\n    uncompressed: 'http://code.playcanvas.com/%s'\n" % (compressed, uncompressed)
    f.write(s)

def get_compressed(urls):
    compressed = [url for url in urls if url.find(".min.") >=0]
    if compressed:
        return compressed[0]
    else:
        return None

def get_uncompressed(urls):
    uncompressed = [url for url in urls if url.find(".min.") < 0]
    if uncompressed:
        return uncompressed[0]
    else:
        return None
    
def write(d, output):
    f = open(output, "w")
    
    f.write("latest:\n")
    write_entry(f, "latest", "playcanvas-latest.min.js", "playcanvas-latest.js")
    
    versions = d.keys()
    versions.sort(key = StrictVersion, reverse=True)
    
    if versions:
        f.write("current:\n")
        write_entry(f, versions[0], get_compressed(d[versions[0]]), get_uncompressed(d[versions[0]])) 

    if len(versions) > 1:
        f.write("versioned:\n")    
        for version in versions[1:]:
            write_entry(f, version, get_compressed(d[version]), get_uncompressed(d[version]))

    f.close()
    
path = "/srv/www/code.playcanvas.com/public_html"
output = "downloads.yaml"

if len(sys.argv) > 1:
    path = sys.argv[1]
    
if len(sys.argv) > 2:
    output = sys.argv[2]

run(path, output)