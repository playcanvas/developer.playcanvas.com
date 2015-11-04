/**
 * i18n plugin
 * register handlebars handler which looks up translations in a dictionary
 */

var path = require("path");
var fs = require("fs");
var handlebars = require("handlebars");

module.exports = function makePlugin() {
        return function (opts) {
            var data = {
                "en": {}
            };

            //load translation data
            if (opts.locales) {
                try {
                    opts.locales.forEach( function (loc) {
                        try {
                            content = fs.readFileSync(path.join(__dirname + "../../../", loc.file));
                            data[loc.locale] = JSON.parse(content);
                        } catch (e) {
                            console.error("Failed to load: " + e.path);
                        }
                    });
                } catch (e) {
                    console.error(e);
                }
            }

            handlebars.registerHelper("i18n", function (msg) {
                if (msg && this.file.locale && data[this.file.locale] && data[this.file.locale][msg]) {
                    return data[this.file.locale][msg];
                }
                return msg;
            });

            return function(files, metalsmith, done){
                for (filename in files) {
                    // add locale metadata to files
                    var locale = filename.split("/")[0];
                    files[filename]['locale'] = locale; // locale: 'en'
                    files[filename][locale] = true;     // 'en': true
                }
                done();
            };
        };
    };
