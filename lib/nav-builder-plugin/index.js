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
var t = null;

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

            handlebars.registerPartial("navigation",
                fs.readFileSync(path.join(template), "utf-8"));

            return function(files, metalsmith, done){
                var tree = {};

                function find(path, root) {
                    if (root.path === path) {
                        return root;
                    } else {
                        for (var i=0;i<root.children.length;i++) {
                            var value = find(path, root.children[i]);
                            if (value) {
                                return value;
                            }
                        }
                    }

                    return null;
                }

                var tree = {
                    id: "/",
                    children: []
                };

                for (var filepath in files) {
                    // skip paths that aren't under the supplied directory
                    if (dir && filepath.indexOf(dir) !== 0) {
                        continue;
                    }

                    var file = files[filepath];
                    var parts = filepath.split(path.sep);


                    if (file.skip) {
                        continue;
                    }

                    var parent = tree;
                    var childPath = ""
                    parts.forEach(function (part, index) {
                        var parent = find(childPath, tree);
                        if (!parent) {
                            parent = tree;
                        }
                        childPath += ("/" + part);

                        var node = find(childPath, tree);
                        if (!node) {
                            if (part === "index.html") {
                                parent.title = file.title || filepath;
                                parent.id = parent.title.replace(/ /g, '');
                                parent.file = file;
                            } else {
                                node = {
                                    path: childPath,
                                    children: [],
                                    file: file
                                }

                                parent.children.push(node);
                            }
                        }

                    });
                }

                // Sort all children according to the "position" value in their metadata
                var sortChildren = function (node) {
                    node.children = node.children.sort(function (a, b) {
                        var apos = a.file.position || 100;
                        var bpos = b.file.position || 100;
                        return apos - bpos;
                    });

                    node.children.forEach(function (c) {
                        sortChildren(c);
                    });
                }

                sortChildren(tree);

                //console.log(JSON.stringify(tree, null, 4));

                if(!t) {
                    t = handlebars.compile(handlebars.partials.navigation);
                }
                var contents = t(tree);

                handlebars.registerPartial(partialName, contents);

                done();
            };
        };
    };
