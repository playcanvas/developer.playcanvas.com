/**
 * Expose `plugin`.
 */


var path = require("path");
var fs = require("fs");
var handlebars = require("handlebars");

/**
 * A Metalsmith plugin that builds a hierarchy from the file tree
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
var t = {};

/**
* Returns a function for making new nav-builder plugins
* var navbuilder = require('nav-builder-plugin');
* metalsmith.use(navbuilder('top-directory-name')({
*    engine: handlebars,
*    template: "template/navigation.tmpl.html",
*    partialName: "navigation-top"
* }));
*/
module.exports = function makePlugin(dir) {
        dir = dir || null;
        return function (opts) {
            var handlebars = opts.engine;
            var template = opts.template;
            var partialName = opts.partialName;
            var contentPath = opts.contentPath;

            handlebars.registerPartial("template-" + partialName,
                fs.readFileSync(path.join(template), "utf-8"));

            return function(files, metalsmith, done){
                var f = fs.readFileSync(contentPath, "utf-8");

                if (!t[partialName]) {
                    t[partialName] = handlebars.compile(handlebars.partials['template-' + partialName]);
                }

                var contents = t[partialName](JSON.parse(f));

                handlebars.registerPartial(partialName, contents);

                done();
            };
        };
    };
