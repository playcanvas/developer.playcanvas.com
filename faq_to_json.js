var path = require("path");
var fs = require("fs");
var metalsmith  = require("metalsmith");
var markdown    = require("metalsmith-markdown");
var exec = require('child_process').exec;

var usage = 'Usage: node faq_to_json.js --dir content/en/faq --out file.json --bucket code.playcanvas.com';

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
var sourceDir = args[ind+1];
var parts = sourceDir.split('/');
parts[0] = 'build';
var buildDir = parts.join('/');

var ind = args.indexOf('--out');
if (ind === -1 || !args[ind+1]) {
    console.log(usage);
    process.exit(-1);
}
var outfile = args[ind+1];

var ind = args.indexOf('--bucket');
if (ind === -1 || !args[ind+1]) {
    console.log(usage);
    process.exit(-1);
}
var s3Bucket = args[ind+1];

// end json
var json = [];

// init metalsmith
var m = new metalsmith(__dirname);
m.source(sourceDir).use(markdown());

// convert markdown files to html
m.build(function (err, results) {
    if (err) {
        throw err;
    }

    // process results
    for (var key in results) {
        // remove html file
        fs.unlink(path.join(__dirname, 'build/' + key));

        var html = results[key].contents.toString('utf-8');

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
    writeJson(outfile, function () {
        gzip(outfile, function () {
            upload(outfile);
        });
    });
});

// write target json file
var writeJson = function (file, callback) {
    console.log('Saving file...');
    var stream = fs.createWriteStream(file);
    stream.once('open', function () {
        stream.write(JSON.stringify(json, null, 4));
        stream.end();

        if (callback)
            callback();
    });
};

var gzip = function (file, callback) {
    console.log('Compressing...');
    exec('gzip < ' + file + ' > ' + file + '.gz', function (err) {
        if (err) throw err;

        callback();
    });
};

var upload = function (file) {
    console.log('Uploading to S3');
    exec("s3cmd -m application/json --add-header='Content-Encoding: gzip' --acl-public put " + file + '.gz s3://' + s3Bucket + '/' + file, function (err) {
        if (err)
            throw err;
    });
};
