const fs = require('fs');
const path = require('path');

module.exports = function makePlugin(dir) {
    dir = dir || null;
    return function (opts) {
        return function (files, metalsmith, done) {
            const json = {};

            // first pass
            // build a json tree of the entire directory
            for (let filepath in files) {
                const file = files[filepath];

                // Convert all backslashes to forward slashes
                filepath = filepath.replace(/\\/g, "/");

                const folders = filepath.split("/");

                if (folders[folders.length - 1] === ".DS_Store") {
                    continue;
                }

                const index = {};
                const create = (i, o) => {
                    if (i >= folders.length) {
                        return;
                    }
                    const name = folders[i];
                    if (o[name] === undefined) {
                        o[name] = {
                            _name: file.title,
                            _position: file.position,
                            _path: "/" + filepath.replace(".html", "") + "/"
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
                        o._path = "/" + path.dirname(filepath) + "/";

                        // look up index file in list of indexes to set correct position
                        index[filepath]._position = file.position;
                    }

                    create(++i, o[name]);
                };

                create(0, json);
            }

            // second pass
            // Create lists of files in a hierarchy
            // This is easier for the templater to digest
            const langs = ['en', 'ja', 'ru', 'zh'];
            const usermanualContents = {};
            const tutorialContents = {};
            const legacyTutorialContents = {};
            const shaderEditorContents = {};

            const extractIndex = (manual) => {
                const result = [];
                for (const key in manual) {
                    if (key[0] === "_") continue;
                    const item = manual[key];
                    if (item._path.indexOf("index") >= 0) continue;

                    const o = {
                        name: item._name,
                        position: item._position || 1000,
                        path: item._path,
                        children: []
                    };

                    for (const _key in item) {
                        if (_key[0] === "_") continue;

                        const child = item[_key];
                        if (child._path.indexOf("index") >= 0) continue;

                        const c = {
                            name: child._name,
                            position: child._position || 1000,
                            path: child._path,
                            children: []
                        };

                        for (const _key2 in child) {
                            if (_key2[0] === "_") continue;

                            const grandchild = child[_key2];
                            if (grandchild._path.indexOf("index") >= 0) continue;

                            const g = {
                                name: grandchild._name,
                                position: grandchild._position || 1000,
                                path: grandchild._path,
                                children: []
                            };
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
                    result.push(o);
                }

                result.sort(function (a, b) {
                    return (a.position - b.position);
                });

                return result;
            };

            langs.forEach((lang) => {
                if (!json[lang]) {
                    return;
                }

                usermanualContents[lang] = extractIndex(json[lang]['user-manual']);

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

                // shader editor
                shaderEditorContents[lang] = extractIndex(json[lang]['shader-editor']);

                const getTutorialContents = function (content, result) {
                    for (const key in content) {
                        if (key[0] === "_") continue;

                        const item = content[key];
                        const o = {
                            name: item._name,
                            position: item._position || 1000,
                            path: item._path,
                            children: []
                        };

                        for (const _key in item) {
                            if (_key[0] === "_") continue;

                            const child = item[_key];
                            if (child._path.indexOf("index") >= 0) continue;

                            const c = {
                                name: child._name,
                                position: child._position || 1000,
                                path: child._path,
                                children: []
                            };
                            o.children.push(c);
                        }

                        o.children.sort((a, b) => {
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

                getTutorialContents(json[lang].tutorials, tutorialContents);
                getTutorialContents(json[lang].tutorials.legacy, legacyTutorialContents);

            });

            let fd;

            fd = fs.openSync("content/_usermanual_contents.json", "w");
            fs.write(fd, JSON.stringify(usermanualContents), function (err, written, string) { });

            fd = fs.openSync("content/_tutorial_contents.json", "w");
            fs.write(fd, JSON.stringify(tutorialContents), function (err, written, string) { });

            fd = fs.openSync("content/_tutorial_contents_legacy.json", "w");
            fs.write(fd, JSON.stringify(legacyTutorialContents), function (err, written, string) { });

            fd = fs.openSync("content/_shadereditor_contents.json", "w");
            fs.write(fd, JSON.stringify(shaderEditorContents), function (err, written, string) { });

            done();
        };
    };
};
