/**
 * @param  {string} f Filename
 * @param  {object} stat File System @see {@link http://nodejs.org/api/fs.html File System}
 */

const ignoreList = [
    'content/_tutorial_contents_legacy.json',
    'content/_tutorial_contents.json',
    'content/_usermanual_contents.json',
    'content/_shadereditor_contents.json'
];

const filter = function (f, stat) {
    var include = (stat.isFile() && !ignoreList.some(filename => filename === f)) || stat.isDirectory();
    return include;
};

module.exports = filter;