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
    
    files = get_file_list(path)
    
    r = re.compile("playcanvas-(.+?)(.min)?.js")
    
    for file in files:
        m = r.match(file)
        if m:
            version = m.group(1)
            if version in ['stable', 'latest']:
                continue
            results.append({
                "version": version,
                "url": file
            })
    
    results.sort(key = lambda x: StrictVersion(x['version']), reverse=True)
    
    print(results)
    write(results, output)

def write_entry(f, version, url):
    s = """  - version: %s\n    url: http://code.playcanvas.com/%s\n"""
    
    f.write(s % (version, url))
        
def write(results, output):
    f = open(output, "w")
    
    s = """  - version: %s
    url: http://code.playcanvas.com/%s"""
    
    f.write("latest:\n")
    write_entry(f, "latest", "playcanvas-latest.js")
    write_entry(f, "latest", "playcanvas-latest.min.js")
    
    if len(results) > 1:
        f.write("current:\n")
        write_entry(f, results[0]['version'], results[0]['url'])
        write_entry(f, results[1]['version'], results[1]['url'])
    
        f.write("versioned:\n")
        for result in results[2:]:
            write_entry(f, result['version'], result['url'])

    f.close()
    
path = "/srv/www/code.playcanvas.com/public_html"
output = "downloads.yaml"

if len(sys.argv) > 1:
    path = sys.argv[1]
    
if len(sys.argv) > 2:
    output = sys.argv[2]

run(path, output)