/**
 * i18n plugin
 * register handlebars handler which looks up translations in a dictionary
 */

const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

module.exports = function makePlugin() {
    return function (opts) {
        const data = {
            "en": {}
        };

            // load translation data
        if (opts.locales) {
            try {
                opts.locales.forEach(function (loc) {
                    try {
                        const content = fs.readFileSync(path.join(__dirname + "../../../", loc.file));
                        data[loc.locale] = JSON.parse(content);
                    } catch (e) {
                        console.error("Failed to load: " + e.path);
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }

        opts.output.msgs = [];

        handlebars.registerHelper("i18n", function (options) {
            const locale = options.data.root.locale;
            const msg = options.fn(this);

                // save out a list of all requests
                // we can output this to a file for localization
            opts.output.msgs[msg] = true;

            if (msg && data[locale] && data[locale][msg]) {
                return data[locale][msg];
            }
            return msg;
        });

        return function (files, metalsmith, done) {
            for (const filename in files) {
                    // add locale metadata to files

                    // Ensure Windows paths are converted to forward slashes as necessary
                const filenameForwardSlashes = filename.replace(/\\/g, "/");

                const locale = filenameForwardSlashes.split("/")[0];
                files[filename].locale = locale; // locale: 'en'
                files[filename][locale] = true;     // 'en': true
            }
            done();
        };
    };
};
