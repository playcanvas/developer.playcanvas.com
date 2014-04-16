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
                    if (dir && filepath.indexOf(dir) !== 0) {
                        console.log("skipping: " + filepath)
                        continue;
                    }

                    var file = files[filepath];

                    //filepath = filepath.replace(path.extname(filepath), "");
                    var parts = filepath.split(path.sep);

                    var parent = tree;
                    var childPath = ""
                    parts.forEach(function (part, index) {
                        var parent = find(childPath, tree);
                        if (!parent) {
                            parent = tree;
                        }
                        childPath += ("/" + part);

                        var node = find(childPath, tree);

                        //console.log(childPath, node ? node.id : null, parent ? parent.id : null);

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
                                //console.log("add child " + node.id + " to " + parent.id);
                            }
                        }

                    });
                }

                // debug 
                function draw(node) {
                    console.log(node);
                    node.children.forEach(function (child) {
                        draw(child);
                    });
                }

                function sorter(a, b) {
                    if (a.position === undefined) {
                        if (b.position === undefined) {
                            return 0;
                        }
                        return -1;
                    } else if (b.position === undefined) {
                        return 1;
                    }

                    return a.position - b.position;
                }
                
                function sortChildren(children) {
                    console.log("sort")
                    children = children.sort(sorter);

                    for (var i = 0; i < children.length; i++) {
                        console.log(children[i].title);
                        sortChildren(children[i].children);
                    }
                }

                if(!t) {
                    t = handlebars.compile(handlebars.partials.navigation);
                }
                var contents = t(tree);
                
                handlebars.registerPartial(partialName, contents);

                done();
            };
        };
    };
