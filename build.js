const fs   = require('fs');
const path = require('path');

const handlebars = require('handlebars');
const marked     = require('marked');
const Metalsmith = require('metalsmith');
const layouts    = require('@metalsmith/layouts');
const markdown   = require('@metalsmith/markdown');
const permalinks = require('@metalsmith/permalinks');
const headings   = require('metalsmith-headings-identifier');
const msStatic   = require('metalsmith-static');
const navbuilder = require('./lib/nav-builder-plugin/index');
const locale     = require('./lib/locale/index');
const i18n       = require('./lib/i18n/index');
const i18nout    = require('./lib/i18n-out/index');
const contents   = require('./lib/contents-json/index');
const tutorials  = require('./lib/tutorials/index');

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
    const partialPath = path.join(__dirname, 'layouts', 'partials', `${partialName}.hbs`);
    const partialText = fs.readFileSync(partialPath, {
        encoding: 'utf8'
    });
    handlebars.registerPartial(partialName, partialText);
});

handlebars.registerHelper('lang-selector', (lang) => {
    return `{{#if ${lang}}}`;
});

handlebars.registerHelper('lang-selector-close', (lang) => {
    return '{{/if}}';
});

// Convert relativeURL with a locale like en/manual to a full url with the
// desired locale e.g. https://developer.playcanvas.com/ja/user-manual
handlebars.registerHelper('locale-url', (locale, relativeUrl) => {
    relativeUrl = path.join(locale, relativeUrl.substring(2));
    const url = new URL(relativeUrl, 'https://developer.playcanvas.com/');
    return url.href;
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

Metalsmith(__dirname)
    .source('content')
    .metadata({
        prod: env === 'prod'
    })
    .use(msStatic({
        src: 'public',
        dest: '.'
    }))
    .use(markdown({
        gfm: true,
        renderer: renderer
    }))
    .use(headings({
        selector: 'h2,h3,h4,h5,h6',
        linkTemplate: " <a class='header-anchor font-icon' href='#%s'>&#58216;</a>",
        position: 'right'
    }))
    .use(contents()())
    .use(permalinks({
        pattern: ':filename'
    }))
    .use(i18n()({
        locales: [{
            file: 'content/ja/messages.json', locale: 'ja'
        }, {
            file: 'content/ru/messages.json', locale: 'ru'
        }, {
            file: 'content/zh/messages.json', locale: 'zh'
        }],
        output: localization
    }))
    .use(navbuilder('en')({
        engine: handlebars,
        template: path.join(__dirname, 'layouts/partials/navigation.hbs'),
        contentPath: 'content/_usermanual_contents.json',
        partialName: 'user-manual-navigation'
    }))
    .use(navbuilder('en')({
        engine: handlebars,
        template: path.join(__dirname, 'layouts/partials/navigation.hbs'),
        contentPath: 'content/_shadereditor_contents.json',
        partialName: 'shader-editor-navigation'
    }))
    .use(tutorials('tutorials')())
    .use(layouts())
    .use(locale()())
    .use(i18nout()({
        data: localization
    }))
    .build(function (err) {
        if (err) throw err;
    });
