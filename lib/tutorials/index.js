const fetch = require('node-fetch');
const fs = require("fs");
const handlebars = require('handlebars');
const path = require('path');

// eslint-disable-next-line no-extend-native
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
const getTaggedProjects = async (done) => {
    const tagged = {};
    let skip = 0;
    let finished = false;

    while (!finished) {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(`https://playcanvas.com/api/apps?limit=32&tags=tutorial&skip=${skip}`);
        if (!response.ok) {
            throw new Error(`failed to download tagged projects (${response.status})`);
        }

        // eslint-disable-next-line no-await-in-loop
        const json = await response.json();
        const tutorials = json.result;

        for (const tutorial of tutorials) {
            const appUrl = tutorial.url;
            const editorUrl = `https://playcanvas.com/editor/project/${tutorial.project_id}`;
            const projectUrl = `https://playcanvas.com/project/${tutorial.project_id}/overview`;
            const thumbUrl = tutorial.thumbnails.m;
            const title = tutorial.name;
            const tags = tutorial.tags || [];
            const slug = generateSlug(title);
            const description = tutorial.description;

            const url = '/tutorials/' + slug;
            const path = 'en' + url;

            tagged[path] = { title, url, path, tags, slug, appUrl, editorUrl, projectUrl, thumbUrl, description };
        }

        skip += 32;
        finished = tutorials.length < 32;
    }

    done(tagged);
};

const getTags = async (tagIds, done) => {
    const tags = [];

    for (const tagId of tagIds) {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(`https://playcanvas.com/api/tags/${tagId}`);
        if (!response.ok) {
            // If tag is not found in db, skip it
            if (response.status == 404) {
                continue;
            } else {
                throw new Error(`failed to retrieve tag with id ${tagId}: (${response.status})`);
            }
        }

        // eslint-disable-next-line no-await-in-loop
        const tag = await response.json();
        tags.push(tag);
    }

    done(tags);
};

module.exports = function makePlugin(dir) {
    // compile the template used to generate pages for tagged projects
    handlebars.registerPartial("template-tagged-project", fs.readFileSync("layouts/partials/tutorial-tagged-project.hbs", "utf-8"));
    const taggedProjectTemplate = handlebars.compile(handlebars.partials["template-tagged-project"]);

    return function (opts) {
        return function (files, metalsmith, done) {
            const langs = ['en', 'ru', 'ja', 'zh'];

            const tutorialsIndex = {}; // index object of tutorials
            const projectDemosIndex = {}; // index object of project demos

            let tutorialTags = new Set();  // set of tags related to tutorials

            // get all tutorial tags
            for (const filepath in files) {
                if (filepath.indexOf('.DS_Store') >= 0) {
                    continue;
                }

                const file = files[filepath];

                if (filepath.startsWith(path.join('en', dir))) {
                    // skip main tutorials index page
                    if (filepath.endsWith(path.join('tutorials', 'index.html'))) {
                        continue;
                    }

                    for (const tag of file.tags) {
                        tutorialTags.add(tag);
                    }
                }
            }

            for (let i = 0; i < langs.length; i++) {
                const lang = langs[i];
                tutorialsIndex[lang] = {};

                // get all tutorials and insert into index
                for (const filepath in files) {
                    if (filepath.indexOf('.DS_Store') >= 0) {
                        continue;
                    }

                    const file = files[filepath];

                    if (filepath.startsWith(path.join(lang, dir))) {
                        // skip main tutorials index page
                        if (filepath.endsWith(path.join('tutorials', 'index.html'))) {
                            continue;
                        }

                        // separate tags
                        const tags = file.tags || '';
                        file.tags = tags.split(',').filter(function (tag) {
                            return !!tag;
                        }).map((tag) => {
                            return tag.trim();
                        }) || [];

                        const url = filepath.split(path.sep).join('/');

                        tutorialsIndex[lang][filepath] = {
                            title: file.title,
                            url: url.replace(lang, '').replace('index.html', ''),
                            tags: file.tags,
                            thumbUrl: file.thumb
                        };

                        // add unique tag for tutorials
                        tutorialsIndex[lang][filepath].tags.push('_tutorial');
                    }
                }

                projectDemosIndex[lang] = {};
            }

            getTaggedProjects(function (tagged) {

                // add tagged projects into main index
                for (const key in tagged) {

                    // Add tags from projects to list of tags
                    for (const tag of tagged[key].tags) {
                        tutorialTags.add(tag);
                    }

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
                            layout: 'tutorial-page.hbs',
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

                // Filter out tutorial tag
                tutorialTags = [...tutorialTags].filter(tag => tag != "tutorial").sort();

                // Retrieve list of tag objects from API
                getTags(tutorialTags, function (tagObjects) {
                    const tags = tagObjects;

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
                    handlebars.registerPartial(contentsTemplatePartialName, fs.readFileSync("layouts/partials/tutorial-contents.hbs", "utf-8"));
                    let contentsTemplate = handlebars.compile(handlebars.partials[contentsTemplatePartialName]);
                    let contents = contentsTemplate(context);

                    // registry the generated contents template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-navigation', contents);

                    // render a new template used to template the tag selection on a tutorial page
                    const contentsLinksTemplatePartialName = 'template-tutorial-contents-links';
                    handlebars.registerPartial(contentsLinksTemplatePartialName, fs.readFileSync("layouts/partials/tutorial-contents-links.hbs", "utf-8"));
                    contentsTemplate = handlebars.compile(handlebars.partials[contentsLinksTemplatePartialName]);
                    contents = contentsTemplate(context);
                    handlebars.registerPartial('tutorials-navigation-links', contents);

                    // tutorial navigation
                    // render a new template using the template's template(!) and the content from the file tree
                    const listTemplatePartialName = 'template-tutorial-list';
                    handlebars.registerPartial(listTemplatePartialName, fs.readFileSync("layouts/partials/tutorial-list.hbs", "utf-8"));
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
