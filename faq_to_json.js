const path = require("path");
const fs = require("fs");
const metalsmith = require("metalsmith");
const markdown = require("metalsmith-markdown");
const exec = require('child_process').exec;

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

// end json
const json = [];

// write target json file
const writeJson = (file, callback) => {
    console.log('Saving file...');
    const stream = fs.createWriteStream(file);
    stream.once('open', () => {
        stream.write(JSON.stringify(json, null, 4));
        stream.end();

        if (callback)
            callback();
    });
};

const gzip = (file, callback) => {
    console.log('Compressing...');
    const cmd = `gzip -c ${file} > ${file}.gz`;
    exec(cmd, (err) => {
        if (err) throw err;

        callback();
    });
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

    // process results
    for (const key in results) {
        // remove html file
        fs.unlinkSync(path.join(__dirname, 'build/' + key));

        let html = results[key].contents.toString('utf-8');

        // add close button
        html += '\n<button class="close">GOT IT</button>';

        // add data to json
        json.push({
            title: results[key].title,
            html: html,
            keywords: results[key].keywords.replace(/\s+/g, '').split(',')
        });
    }

    // save json and upload to S3
    writeJson(outfile, () => {
        gzip(outfile, () => {
            upload(outfile);
        });
    });
});
