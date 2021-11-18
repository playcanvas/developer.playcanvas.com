const fetch = require('node-fetch');
const fs = require("fs");
const handlebars = require('handlebars');

/* eslint-disable-next-line no-extend-native */
String.prototype.replaceAll = function (search, replacement) {
    const target = this;
    return target.split(search).join(replacement);
};

const generateSlug = (title) => {
    let slug = '';
    const allowed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -';
    for (let i = 0; i < title.length; i++) {
        const ch = title[i];
        if (allowed.indexOf(ch) >= 0) {
            slug += ch;
        }
    }
    slug = slug.toLowerCase().replaceAll(' ', '-');
    return slug;
};

// Get tagged projects from the public API
const getTaggedProjects = (done) => {
    const tagged = {};
    let skip = 0;
    const get = (cb) => {
        fetch(`https://playcanvas.com/api/apps?limit=32&tags=tutorial&skip=${skip}`)
            .then(res => res.json())
            .then((json) => {
                const samples = json.result;

                for (let i = 0; i < samples.length; i++) {
                    const sample = samples[i];
                    const appUrl = sample.url;
                    const editorUrl = `https://playcanvas.com/editor/project/${sample.project_id}`;
                    const projectUrl = `https://playcanvas.com/project/${sample.project_id}/overview`;
                    const thumbUrl = sample.thumbnails.m;
                    const name = sample.name;
                    const tags = sample.tags || [];
                    const slug = generateSlug(name);
                    const description = sample.description;

                    const url = '/tutorials/' + slug;
                    const path = 'en' + url;

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

    get(() => {
        done(tagged);
    });
};

const getTags = (done) => {
    fetch('https://playcanvas.com/api/tags')
        .then(res => res.json())
        .then((json) => {
            let tags = json.result;
            tags = tags.filter((tag) => {
                if (['skype', 'tutorial', 'challenge'].indexOf(tag.id) >= 0) return false;
                return tag.kind === 'app';
            });
            done(tags);
        })
        .catch((err) => {
            console.log(`failed to download tags (${err})`);
            done([]);
        });
};

module.exports = function makePlugin(dir) {
    // compile the template used to generate pages for tagged projects
    handlebars.registerPartial("template-tagged-project", fs.readFileSync("templates/partials/tutorial-tagged-project.tmpl.html", "utf-8"));
    const taggedProjectTemplate = handlebars.compile(handlebars.partials["template-tagged-project"]);

    return function (opts) {
        return function (files, metalsmith, done) {
            const langs = ['en', 'ru', 'ja', 'zh'];

            const tutorialsIndex = {}; // index object of tutorials
            const projectDemosIndex = {}; // index object of project demos

            for (let i = 0; i < langs.length; i++) {
                const lang = langs[i];
                tutorialsIndex[lang] = {};
                // get all tutorials and insert into index
                for (const filepath in files) {
                    if (filepath.indexOf('.DS_Store') >= 0) continue;

                    const file = files[filepath];

                    if (filepath.startsWith(lang + '/' + dir)) {
                        if (filepath.endsWith('tutorials/index.html')) continue; // skip main index page

                        // separate tags
                        const tags = file.tags || '';
                        file.tags = tags.split(',').filter(function (tag) {
                            return !!tag;
                        }).map((tag) => {
                            return tag.trim();
                        }) || [];

                        tutorialsIndex[lang][filepath] = {
                            title: file.title,
                            url: filepath.replace(lang, '').replace('index.html', ''),
                            tags: file.tags,
                            thumbUrl: file.thumb
                        };

                        // add unique tag for tutorials
                        tutorialsIndex[lang][filepath].tags.push('_tutorial');
                    }
                }

                projectDemosIndex[lang] = {};
            }

            getTags(function (tags) {
                getTaggedProjects(function (tagged) {
                    // add tagged projects into main index
                    for (const key in tagged) {
                        // Add the demo tag so we can tell later what is a demo
                        // and what is a full tutorial
                        tagged[key].tags.push('_demo');

                        for (let i = 0; i < langs.length; i++) {
                            const lang = langs[i];
                            const project = tagged[key];

                            // insert tagged project into index
                            projectDemosIndex[lang][key] = project;

                            // create a new output file for each tagged project
                            const file = {
                                title: project.title,
                                template: 'tutorial-page.tmpl.html',
                                tags: project.tags,
                                mode: '0644',
                                path: lang + project.url,
                                locale: lang,
                                en: true,
                                description: project.description,
                                contents: Buffer.from(taggedProjectTemplate(project))
                            };

                            files[file.path + '/index.html'] = file;
                        }
                    }

                    const context = {
                        pages: {},
                        tags: tags
                    };

                    for (const lang in tutorialsIndex) {
                        context.pages[lang] = {
                            tutorials: [],
                            projectDemos: []
                        };
                        // Add all the tutorial pages to the language
                        for (const key in tutorialsIndex[lang]) {
                            context.pages[lang].tutorials.push(tutorialsIndex[lang][key]);
                        }

                        // Add all the project demos to the language
                        for (const key in projectDemosIndex[lang]) {
                            context.pages[lang].projectDemos.push(projectDemosIndex[lang][key]);
                        }

                        const comparePages = (a, b) => {
                            if (a.title && b.title) {
                                const _a = a.title.toLowerCase();
                                const _b = b.title.toLowerCase();
                                if (_a < _b) return -1;
                                if (_a > _b) return 1;
                            }
                            return 0;
                        };

                        context.pages[lang].tutorials.sort(comparePages);
                        context.pages[lang].projectDemos.sort(comparePages);
                    }

                    // tutorial main page filters
                    // render a new template using the template's template(!) and the content from the file tree
                    const contentsTemplatePartialName = 'template-tutorial-contents';
                    handlebars.registerPartial(contentsTemplatePartialName, fs.readFileSync("templates/partials/tutorial-contents.tmpl.html", "utf-8"));
                    let contentsTemplate = handlebars.compile(handlebars.partials[contentsTemplatePartialName]);
                    let contents = contentsTemplate(context);

                    // registry the generated contents template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-navigation', contents);

                    // render a new template used to template the tag selection on a tutorial page
                    const contentsLinksTemplatePartialName = 'template-tutorial-contents-links';
                    handlebars.registerPartial(contentsLinksTemplatePartialName, fs.readFileSync("templates/partials/tutorial-contents-links.tmpl.html", "utf-8"));
                    contentsTemplate = handlebars.compile(handlebars.partials[contentsLinksTemplatePartialName]);
                    contents = contentsTemplate(context);
                    handlebars.registerPartial('tutorials-navigation-links', contents);

                    // tutorial navigation
                    // render a new template using the template's template(!) and the content from the file tree
                    const listTemplatePartialName = 'template-tutorial-list';
                    handlebars.registerPartial(listTemplatePartialName, fs.readFileSync("templates/partials/tutorial-list.tmpl.html", "utf-8"));
                    const listTemplate = handlebars.compile(handlebars.partials[listTemplatePartialName]);
                    contents = listTemplate(context);

                    // generate pages for tagged projects

                    // registry the generated list template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-list', contents);

                    done();
                });
            });
        };
    };
};
