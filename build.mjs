import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';
import { marked } from 'marked';
import Metalsmith from 'metalsmith';
import layouts from '@metalsmith/layouts';
import markdown from '@metalsmith/markdown';
import permalinks from '@metalsmith/permalinks';
import beautify from 'metalsmith-beautify';
import msStatic from 'metalsmith-static';
import remove from '@metalsmith/remove';
import navbuilder from './lib/nav-builder-plugin/index.mjs';
import locale from './lib/locale/index.mjs';
import i18n from './lib/i18n/index.mjs';
import i18nout from './lib/i18n-out/index.mjs';
import contents from './lib/contents-json/index.mjs';
import tutorials from './lib/tutorials/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const renderer = new marked.Renderer();

// Ensure external links open in a new tab
renderer.link = (href, title, text) => {
    const external = href.startsWith('http') && !href.includes('playcanvas.com');
    if (external) {
        return `<a href="${href}" target="_blank">${text}</a>`;
    }
    return `<a href="${href}">${text}</a>`;
};

// Insert an anchor for headings h2 and smaller
renderer.heading = (text, level, raw, slugger) => {
    if (level >= 2) {
        const id = slugger.slug(raw);
        return `<h${level} id="${id}">${text}<a class="header-anchor font-icon" href="#${id}">&#xE368;</a></h${level}>\n`;
    }

    return `<h${level}>${text}</h${level}>\n`;
};

// Add lazy loading attribute to images
renderer.image = (href, title, text) => {
    return `<img src="${href}" loading="lazy" alt="${text}">`;
};

// Ensure table header cells have scope="col" attribute (required for accessibility)
renderer.tablecell = (content, flags) => {
    const type = flags.header ? 'th' : 'td';
    let openTag = `<${type}`;

    if (flags.header) {
        openTag += ' scope="col"';
    }
    if (flags.align) {
        openTag += ` align="${flags.align}"`;
    }
    openTag += '>';

    const closeTag = `</${type}>`;

    return openTag + content + closeTag + '\n';
};

// Store strings requested
const localization = {};

Metalsmith(__dirname)
    .source('content')
    .metadata({
        prod: env === 'prod'
    })
    .use(msStatic({
        src: 'content/index.html',
        dest: 'index.html'
    }))
    .use(remove('index.html'))
    .use(msStatic({
        src: 'public',
        dest: '.'
    }))
    .use(markdown({
        gfm: true,
        renderer: renderer
    }))
    .use(contents())
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
    .use(layouts({
        pattern: '**/*.html'
    }))
    .use(locale())
    .use(i18nout()({
        data: localization
    }))
    .use(beautify())
    .build(function (err) {
        if (err) throw err;
        console.log('Build complete!');
    });
