const path = require("path");
const fs = require("fs");
const metalsmith = require("metalsmith");
const markdown = require("metalsmith-markdown");
const exec = require('child_process').exec;
const { createGzip } = require('zlib');

const usage = 'Usage: node faq_to_json.js --dir content/en/faq --out file.json --bucket code.playcanvas.com';

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
const sourceDir = args[ind + 1];
const parts = sourceDir.split('/');
parts[0] = 'build';

ind = args.indexOf('--out');
if (ind === -1 || !args[ind + 1]) {
    console.log(usage);
    process.exit(-1);
}
const outfile = args[ind + 1];

ind = args.indexOf('--bucket');
if (ind === -1 || !args[ind + 1]) {
    console.log(usage);
    process.exit(-1);
}
const s3Bucket = args[ind + 1];

// write gzipped target json file
const writeJson = (file, json) => {
    console.log('Saving file...');
    const stream = fs.createWriteStream(`${file}.gz`);

    const gzip = createGzip();
    gzip.pipe(stream);
    gzip.write(json);
    gzip.end();
};

const upload = (file) => {
    console.log('Uploading to S3...');
    const cmd = `s3cmd -m application/json --add-header='Content-Encoding: gzip' --acl-public put ${file}.gz s3://${s3Bucket}/${file}`;
    exec(cmd, (err) => {
        if (err)
            throw err;
    });
};

// init metalsmith
const m = new metalsmith(__dirname);
m.source(sourceDir).use(markdown());

// convert markdown files to html
m.build((err, results) => {
    if (err) {
        throw err;
    }

    const json = [];

    // process results
    for (const key in results) {
        // remove html file
        fs.unlinkSync(path.join(__dirname, 'build/' + key));

        let html = results[key].contents.toString('utf-8');

        // links clicked in the Editor should open a new tab
        const re = new RegExp('<a href=', 'g');
        html = html.replace(re, '<a target="_blank" href=');

        // style buttons in the Editor
        html = html.replace('>Learn more<', ' class="docs">View User Manual<');
        html = html.replace('>View tutorial<', ' class="docs">View Tutorial<');

        // add close button
        html += '\n<button class="close">GOT IT</button>';

        // add data to json
        json.push({
            title: results[key].title,
            html: html,
            keywords: results[key].keywords.replace(/\s+/g, '').split(',')
        });
    }

    const jsonStr = JSON.stringify(json, null, 4);

    // save json and upload to S3
    writeJson(outfile, jsonStr);
    upload(outfile);
});
