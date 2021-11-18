// locale plugin
// This loads all finished templates and replaces instances of root folder names in urls with locale versions
// e.g. The string "/user-manual (with leading quote) is replaces with "/en/user-manual
// The locale is retrieved from the root directory of the file.
// e.g. file: '/en/user-manual/index.md' has locale 'en'
module.exports = function makePlugin() {
    return function (opts) {
        return function (files, metalsmith, done) {
            for (const filename in files) {
                // Ensure Windows paths are converted to forward slashes as necessary
                const filenameForwardSlashes = filename.replace(/\\/g, "/");

                const locale = filenameForwardSlashes.split("/")[0];
                const dirs = [
                    'engine',
                    'error',
                    'getting-started',
                    'search',
                    'shader-editor',
                    'tutorials',
                    'user-manual'
                ];

                const data = files[filename];
                let text = data.contents;

                // replace all instances of '"/user-manual' (etc) with '"/en/user-manual'
                for (let i = 0; i < dirs.length; ++i) {
                    const dir = dirs[i];
                    const re = new RegExp('\\"\\/' + dir, "g");
                    const substr = "\"\/" + locale + "/" + dir;

                    text = text.toString().replace(re, substr);
                }

                data.contents = Buffer.from(text);
            }
            done();
        };
    };
};
