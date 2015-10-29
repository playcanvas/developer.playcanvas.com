var path = require("path");
var fs = require("fs");

var usage = 'Usage: node faq.js --dir content/en/faq --out target.md';

var args = process.argv.slice(2);
if (args.length === 0) {
    console.log(usage);
    process.exit(-1);
}

var ind = args.indexOf('--dir');
if (ind === -1 || !args[ind+1]) {
    console.log(usage);
    process.exit(-1);
}
var dir = args[ind+1];

var ind = args.indexOf('--out');
if (ind === -1 || !args[ind+1]) {
    console.log(usage);
    process.exit(-1);
}
var outfile = args[ind+1];

// concatenate faq's into one file
var faqDir = path.join(__dirname, dir);
var files = fs.readdirSync(faqDir);
files.sort();

var processFile = function (content) {
    var processed = content.replace(/font-icon/g, 'pc-icon');
    processed = processed.replace(/^---[\s\S]*?[\s\S]---/, '');

    processed = processed.replace(/^\n*/, '');
    return processed + '\n';
};

var concatStream = fs.createWriteStream(path.join(__dirname, outfile));
concatStream.once('open', function () {
    // write metadata
    concatStream.write('---\ntitle: Common Questions\ntemplate: page.tmpl.html\nposition: 2\n---\n\n');

    // write file content
    files.forEach(function (file) {
        var content = fs.readFileSync(path.join(faqDir, file), 'utf8');
        var processed = processFile(content);
        concatStream.write(processed);
    });

    concatStream.end();
});
