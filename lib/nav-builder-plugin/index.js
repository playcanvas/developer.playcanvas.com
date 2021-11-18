/**
 * Expose `plugin`.
 */


const fs = require("fs");
const path = require("path");

/**
 * A Metalsmith plugin that builds a hierarchy from the file tree
 *
 * @param {object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
const t = {};

//
// Returns a function for making new nav-builder plugins
// let navbuilder = require('nav-builder-plugin');
// metalsmith.use(navbuilder('top-directory-name')({
//    engine: handlebars,
//    template: "template/navigation.tmpl.html",
//    partialName: "navigation-top"
// }));
//
module.exports = function makePlugin(dir) {
    dir = dir || null;
    return function (opts) {
        const handlebars = opts.engine;
        const template = opts.template;
        const partialName = opts.partialName;
        const contentPath = opts.contentPath;

        handlebars.registerPartial("template-" + partialName,
                                   fs.readFileSync(path.join(template), "utf-8"));

        return function (files, metalsmith, done) {
            const f = fs.readFileSync(contentPath, "utf-8");

            if (!t[partialName]) {
                t[partialName] = handlebars.compile(handlebars.partials['template-' + partialName]);
            }

            const json = JSON.parse(f);

            const contents = t[partialName](json);

            if (metalsmith.metadata) {
                const meta = metalsmith.metadata();
                if (meta) {
                    meta[partialName] = json;
                }
            }
            handlebars.registerPartial(partialName, contents);

            done();
        };
    };
};
