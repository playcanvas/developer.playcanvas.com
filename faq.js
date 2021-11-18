const path = require("path");
const fs = require("fs");

const usage = 'Usage: node faq.js --dir content/en/faq --out target.md';

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log(usage);
    process.exit(-1);
}

let ind = args.indexOf('--dir');
if (ind === -1 || !args[ind + 1]) {
    console.log(usage);
    process.exit(-1);
}
const dir = args[ind + 1];

ind = args.indexOf('--out');
if (ind === -1 || !args[ind + 1]) {
    console.log(usage);
    process.exit(-1);
}
const outfile = args[ind + 1];

// concatenate faq's into one file
const faqDir = path.join(__dirname, dir);
const files = fs.readdirSync(faqDir);
files.sort();

const processFile = (content) => {
    let processed = content.replace(/font-icon/g, 'pc-icon');
    processed = processed.replace(/^---[\s\S]*?[\s\S]---/, '');

    processed = processed.replace(/^\n*/, '');
    return processed + '\n';
};

const concatStream = fs.createWriteStream(path.join(__dirname, outfile));
concatStream.once('open', () => {
    // write metadata
    concatStream.write('---\ntitle: Common Questions\ntemplate: usermanual-page.tmpl.html\nposition: 25\n---\n\n');

    // write file content
    files.forEach((file) => {
        const content = fs.readFileSync(path.join(faqDir, file), 'utf8');
        const processed = processFile(content);
        concatStream.write(processed);
    });

    concatStream.end();
});
