const path        = require("path");
const fs          = require("fs");
const url         = require("url");

const handlebars  = require("handlebars");

const marked      = require('marked');
const Metalsmith  = require("metalsmith");
const markdown    = require("metalsmith-markdown");
const permalinks  = require("metalsmith-permalinks");
const templates   = require("metalsmith-templates");
const msStatic    = require("metalsmith-static");
const metadata    = require("metalsmith-metadata");
const navbuilder  = require("./lib/nav-builder-plugin/index");
const locale      = require("./lib/locale/index");
const i18n        = require("./lib/i18n/index");
const i18nout     = require("./lib/i18n-out/index");
const contents    = require("./lib/contents-json/index");
const tutorialBuilder = require('./lib/tutorials/index');
const headingsidentifier = require("metalsmith-headings-identifier");

let env = null;
const args = process.argv.slice(2);
if (args.length) {
    env = args[0];
}

// Load partials
const partials = [
    'analytics',
    'footer',
    'head',
    'header',
    'navbar',
    'scripts',
    'shader-editor-navbar',
    'shader-editor-contents',
    'title-banner',
    'tutorial-contents',
    'tutorial-navbar',
    'usermanual-contents',
    'usermanual-navbar'
];

partials.forEach((partialName) => {
    const partialPath = path.join(__dirname, 'templates', 'partials', `${partialName}.tmpl.html`);
    const partialText = fs.readFileSync(partialPath, {
        encoding: 'utf8'
    });
    handlebars.registerPartial(partialName, partialText);
});

handlebars.registerHelper("lang-selector", (lang) => {
    return `{{#if ${lang}}}`;
});

handlebars.registerHelper("lang-selector-close", (lang) => {
    return "{{/if}}";
});

// Convert relativeURL with a locale like en/manual to a full url with the
// desired locale e.g. http://developer.playcanvas.com/ja/manual
handlebars.registerHelper('locale-url', (locale, relativeUrl) => {
    return url.resolve('http://developer.playcanvas.com', path.join(locale, relativeUrl.substring(2)));
});

// store strings requested
const localization = {};

// links markdown override
const renderer = new marked.Renderer();

// make external links to open as new tabs
renderer.link = (href, title, text) => {
    const external = href.startsWith('http') && href.indexOf('developer.playcanvas.com') === -1;
    let out = `<a href="${href}"`;
    if (title) out += ` title="${title}"`;
    if (external) out += ' target="_blank"';
    out += `>${text}</a>`;
    return out;
};

const m = new Metalsmith(__dirname);

m.source("content")
    .concurrency(10)
    .use(msStatic({
        src: "public",
        dest: "."
    }))
    .use(markdown({
        gfm: true,
        renderer: renderer
    }))
    .use(headingsidentifier({
        selector: "h2,h3,h4,h5,h6",
        linkTemplate: " <a class='header-anchor font-icon' href='#%s'>&#58216;</a>",
        position: "right"
    }))
    .use(contents()())
    .use(permalinks({
        pattern: ":filename"
    }))
    .use(metadata());

// set environment
m.metadata().local = (env === "local");
m.metadata().prod = (env === "prod");
m.metadata().dev = (env === "dev");

m.use(i18n()({
    locales: [{
        file: 'content/ja/messages.json', locale: 'ja'
    }, {
        file: 'content/ru/messages.json', locale: 'ru'
    }, {
        file: 'content/zh/messages.json', locale: 'zh'
    }],
    output: localization
}))
    .use(navbuilder("en")({
        engine: handlebars,
        template: path.join(__dirname, "templates/partials/navigation.tmpl.html"),
        contentPath: "content/_usermanual_contents.json",
        partialName: "user-manual-navigation"
    }))
    .use(navbuilder("en")({
        engine: handlebars,
        template: path.join(__dirname, "templates/partials/navigation.tmpl.html"),
        contentPath: "content/_shadereditor_contents.json",
        partialName: "shader-editor-navigation"
    }))
    .use(tutorialBuilder("tutorials")())
    .use(templates({
        engine: "handlebars",
        directory: "templates"
    }))
    .use(locale()())
    .use(i18nout()({
        data: localization
    }));

m.build((err, files) => {
    if (err) {
        console.error(err);
    }
});
