/**
 * i18n plugin
 * register handlebars handler which looks up translations in a dictionary
 */

import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function makePlugin() {
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
                const locale = filename.split(path.sep)[0];
                files[filename].locale = locale; // locale: 'en'
                files[filename][locale] = true;     // 'en': true
            }
            done();
        };
    };
};
