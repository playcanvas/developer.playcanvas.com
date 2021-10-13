const handlebars = require('handlebars');
const fetch = require('node-fetch');

String.prototype.replaceAll = function (search, replacement) {
        var target = this;
    return target.split(search).join(replacement);
};

var tags;

var generateSlug = function (title) {
    var slug = '';
    var allowed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -';
    for (var i = 0; i < title.length; i++) {
        var ch = title[i];
        if (allowed.indexOf(ch) >= 0) {
            slug += ch;
        }
    }
    slug = slug.toLowerCase().replaceAll(' ', '-');
    return slug;
};

// Get tagged projects from the public API
var getTaggedProjects = function (done) {
    var tagged = {};
    var skip = 0;
    var get = function (cb) {
        fetch('http://playcanvas.com/api/apps?limit=32&tags=tutorial&skip=' + skip)
            .then(res => res.json())
            .then(json => {
                var samples = json.result;

                for (var i = 0; i < samples.length; i++) {
                    var sample = samples[i];
                    var appUrl = sample.url;
                    var editorUrl = 'https://playcanvas.com/editor/project/' + sample.project_id;
                    var projectUrl = 'https://playcanvas.com/project/' + sample.project_id + '/overview';
                    var thumbUrl = sample.thumbnails.m;
                    var name = sample.name;
                    var tags = sample.tags || [];
                    var slug = generateSlug(name);
                    var description = sample.description;

                    var url = '/tutorials/'+slug;
                    var path = 'en'+url;

                    tagged[path] = {
                        title: name,
                        url: url,
                        path: path,
                        tags: tags,
                        slug: slug,
                        appUrl: appUrl,
                        editorUrl: editorUrl,
                        projectUrl: projectUrl,
                        thumbUrl: thumbUrl,
                        description: description
                    };
                }

                if (samples.length === 32) {
                    skip += 32;
                    get(function () {
                        cb();
                    });
                } else {
                    cb();
                }
            })
            .catch((err) => {
                console.log(`failed to download tagged projects (${err})`);
                cb();
            });
    };

    get(function () {
        done(tagged);
    });
};

var getTags = function (done) {
    fetch('https://playcanvas.com/api/tags')
        .then(res => res.json())
        .then(json => {
            var tags = json.result;
            tags = tags.filter(tag => {
                if (['skype', 'tutorial', 'challenge'].indexOf(tag.id) >= 0) return false;
                return tag.kind === 'app'
            });
            done(tags);
        })
        .catch((err) => {
            console.log(`failed to download tags (${err})`);
            done([]);
        });
}

module.exports = function makePlugin(dir) {
    // compile the template used to generate pages for tagged projects
    handlebars.registerPartial("template-tagged-project", fs.readFileSync("templates/partials/tutorial-tagged-project.tmpl.html", "utf-8"));
    taggedProjectTemplate = handlebars.compile(handlebars.partials["template-tagged-project"]);

    return function (opts) {
        return function (files, metalsmith, done) {
            var langs = ['en', 'ru', 'ja', 'zh'];

            var tutorialsIndex = {}; // index object of tutorials
            var projectDemosIndex = {}; // index object of project demos

            var tags = [];
            var tagSet = {};

            for (var i = 0; i < langs.length; i++) {
                var lang = langs[i];
                tutorialsIndex[lang] = {};
                // get all tutorials and insert into index
                for (var filepath in files) {
                    if (filepath.indexOf('.DS_Store') >= 0) continue;

                    var file = files[filepath];

                    if (filepath.startsWith(lang+'/'+dir)) {
                        if (filepath.endsWith('tutorials/index.html')) continue; // skip main index page

                        // separate tags
                        var tags = file.tags || '';
                        file.tags = tags.split(',').filter(function (tag) {return !!tag;}).map(function (tag) {return tag.trim()}) || [];
                        // file.tags.forEach(function (tag) {tagSet[tag]=true;});

                        tutorialsIndex[lang][filepath] = {
                            title: file.title,
                            url: filepath.replace(lang, '').replace('index.html',''),
                            tags: file.tags,
                            thumbUrl: file.thumb
                        }

                        // add unique tag for tutorials
                        tutorialsIndex[lang][filepath].tags.push('_tutorial');
                    }
                }

                projectDemosIndex[lang] = {}
            }

            getTags(function (tags) {
                getTaggedProjects(function (tagged) {
                    // add tagged projects into main index
                    for (var key in tagged) {
                        // Add the demo tag so we can tell later what is a demo
                        // and what is a full tutorial
                        tagged[key].tags.push('_demo');

                        for (var i = 0; i < langs.length; i++) {
                            var lang = langs[i];
                            var project = tagged[key];

                            // insert tagged project into index
                            projectDemosIndex[lang][key] = project;

                            // create a new output file for each tagged project
                            var file = {
                                title: project.title,
                                template: 'tutorial-page.tmpl.html',
                                tags: project.tags,
                                mode: '0644',
                                path: lang + project.url,
                                locale: lang,
                                en: true,
                                description: project.description,
                                contents: Buffer.from(taggedProjectTemplate(project))
                            }

                            // add tags
                            // file.tags.forEach(function (tag) {tagSet[tag]=true;});

                            files[file.path+'/index.html'] = file;
                        }
                    }

                    var context = {
                        pages: {},
                        tags: tags
                    };

                    for (var lang in tutorialsIndex) {
                        context.pages[lang] = {
                            tutorials: [],
                            projectDemos: []
                        };
                        // Add all the tutorial pages to the language
                        for (var key in tutorialsIndex[lang]) {
                            context.pages[lang].tutorials.push(tutorialsIndex[lang][key]);
                        }

                        // Add all the project demos to the language
                        for (var key in projectDemosIndex[lang]) {
                            context.pages[lang].projectDemos.push(projectDemosIndex[lang][key]);
                        }

                        var comparePages = (function (a,b) {
                            if (a.title && b.title) {
                                var _a = a.title.toLowerCase();
                                var _b = b.title.toLowerCase();
                                if (_a < _b) return -1;
                                if (_a > _b) return 1;
                            }
                            return 0;
                        });

                        context.pages[lang].tutorials.sort(comparePages);
                        context.pages[lang].projectDemos.sort(comparePages);
                    }

                    // tutorial main page filters
                    // render a new template using the template's template(!) and the content from the file tree
                    var contentsTemplatePartialName = 'template-tutorial-contents';
                    handlebars.registerPartial(contentsTemplatePartialName, fs.readFileSync("templates/partials/tutorial-contents.tmpl.html", "utf-8"));
                    var contentsTemplate = handlebars.compile(handlebars.partials[contentsTemplatePartialName])
                    var contents = contentsTemplate(context);

                    // registry the generated contents template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-navigation', contents);

                    // render a new template used to template the tag selection on a tutorial page
                    var contentsLinksTemplatePartialName = 'template-tutorial-contents-links';
                    handlebars.registerPartial(contentsLinksTemplatePartialName, fs.readFileSync("templates/partials/tutorial-contents-links.tmpl.html", "utf-8"));
                    var contentsTemplate = handlebars.compile(handlebars.partials[contentsLinksTemplatePartialName])
                    var contents = contentsTemplate(context);
                    handlebars.registerPartial('tutorials-navigation-links', contents);

                    // tutorial navigation
                    // render a new template using the template's template(!) and the content from the file tree
                    var listTemplatePartialName = 'template-tutorial-list';
                    handlebars.registerPartial(listTemplatePartialName, fs.readFileSync("templates/partials/tutorial-list.tmpl.html", "utf-8"));
                    var listTemplate = handlebars.compile(handlebars.partials[listTemplatePartialName])
                    var contents = listTemplate(context);

                    // generate pages for tagged projects

                    // registry the generated list template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-list', contents);;

                    done();
                });

            });
        };
    };
};
