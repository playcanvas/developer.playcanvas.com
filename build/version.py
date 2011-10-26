import sys
import subprocess

def run(output):
    process = subprocess.Popen(['hg', 'id', '-in'], shell=False, stdout=subprocess.PIPE)
    stout = process.communicate()
    (revision, num) = stout[0].split()
    f = open(output, "w")
    f.write('revision: %s-%s' % (num, revision))
    f.close()

if len(sys.argv) > 1:
    output = sys.argv[1]
    
run(output)