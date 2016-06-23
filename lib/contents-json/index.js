fs = require('fs');
path = require('path');

module.exports = function makePlugin(dir) {
    dir = dir || null;
    return function (opts) {
        return function (files, metalsmith, done) {
            var json = {};

            // first pass
            // build a json tree of the entire directory
            for (var filepath in files) {
                var file = files[filepath];
                var folders = filepath.split("/");
                var i = 0;

                if (folders[folders.length-1] === ".DS_Store") {
                    continue;
                }

                var index = {};
                function create (i, o) {
                    if (i >= folders.length) {
                        return;
                    }
                    var name = folders[i];
                    if (o[name] === undefined) {
                        o[name] = {
                            _name: file.title,
                            _position: file.position,
                            _path: "/" + filepath.replace(".html", "")
                        };
                    }

                    // Store folders (all non-files) in an index
                    // because we need to look up the object for the folder
                    // when we get to the index.html file below
                    if (name.indexOf(".html") < 0) {
                        index[filepath] = o[name];
                    }

                    if (name === "index.html") {
                        // Update correct title and path
                        o._name = file.title;
                        o._path = "/" + path.dirname(filepath);

                        // look up index file in list of indexes to set correct position
                        index[filepath]._position = file.position;
                    }

                    create (++i, o[name]);
                }

                create(0, json);
            }

            // second pass
            // Create lists of files in a hierarchy
            // This is easier for the templater to digest
            var langs = ['en', 'ja', 'ru', 'zh'];
            var usermanualContents = {};
            var tutorialContents = {};
            var legacyTutorialContents = {};

            langs.forEach(function (lang) {
                var usermanual = [];
                if (!json[lang]) {
                    return;
                }

                var manual = json[lang]['user-manual'];

                for (var key in manual) {
                    if (key[0] === "_") continue;
                    var item = manual[key];
                    if (item._path.indexOf("index") >= 0) continue;

                    var o = {
                        name: item._name,
                        position: item._position || 1000,
                        path: item._path,
                        children: []
                    }

                    for (var _key in item) {
                        if (_key[0] === "_") continue;

                        var child = item[_key];
                        if (child._path.indexOf("index") >= 0) continue;

                        var c = {
                            name: child._name,
                            position: child._position || 1000,
                            path: child._path,
                            children: []
                        }

                        for (var _key2 in child) {
                            if (_key2[0] === "_") continue;

                            var grandchild = child[_key2];
                            if (grandchild._path.indexOf("index") >= 0) continue;

                            var g = {
                                name: grandchild._name,
                                position: grandchild._position || 1000,
                                path: grandchild._path,
                                children: []
                            }
                            c.children.push(g);
                        }

                        c.children.sort(function (a, b) {
                            return a.position - b.position;
                        });

                        o.children.push(c);
                    }

                    // sort children
                    o.children.sort(function (a, b) {
                        return (a.position - b.position);
                    });
                    usermanual.push(o);
                }

                usermanual.sort(function (a,b) {
                    return (a.position - b.position);
                });

                usermanualContents[lang] = usermanual;

                // tutorials
                tutorialContents[lang] = {
                    beginner: [],
                    intermediate: [],
                    advanced: []
                };

                // legacy tutorials
                legacyTutorialContents[lang] = {
                    beginner: [],
                    intermediate: [],
                    advanced: []
                };

                var getTutorialContents = function (content, result) {
                    for (var key in content) {
                        if (key[0] === "_") continue;

                        var item = content[key];
                        var o = {
                            name: item._name,
                            position: item._position || 1000,
                            path: item._path,
                            children: []
                        };

                        for (var _key in item) {
                            if (_key[0] === "_") continue;

                            var child = item[_key];
                            if (child._path.indexOf("index") >= 0) continue;

                            var c = {
                                name: child._name,
                                position: child._position || 1000,
                                path: child._path,
                                children: []
                            };
                            o.children.push(c);
                        }

                        o.children.sort(function (a,b) {
                            return a.position - b.position;
                        });

                        if (o.path.indexOf("beginner") >= 0) {
                            result[lang].beginner.push(o);
                        }
                        if (o.path.indexOf("intermediate") >= 0) {
                            result[lang].intermediate.push(o);
                        }
                        if (o.path.indexOf("advanced") >= 0) {
                            result[lang].advanced.push(o);
                        }
                    }
                };

                getTutorialContents(json[lang]['tutorials'], tutorialContents);
                getTutorialContents(json[lang]['tutorials']['legacy'], legacyTutorialContents);

            });

            var fd = fs.openSync("content/_usermanual_contents.json", "w");
            fs.write(fd, JSON.stringify(usermanualContents));

            var fd = fs.openSync("content/_tutorial_contents.json", "w");
            fs.write(fd, JSON.stringify(tutorialContents));

            var fd = fs.openSync("content/_tutorial_contents_legacy.json", "w");
            fs.write(fd, JSON.stringify(legacyTutorialContents));

            done();
        };
    };
};

