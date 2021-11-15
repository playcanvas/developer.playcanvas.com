var path        = require("path");
var fs          = require("fs");
var url         = require("url");

var handlebars  = require("handlebars");

var marked      = require('marked');
var Metalsmith  = require("metalsmith");
var markdown    = require("metalsmith-markdown");
var permalinks  = require("metalsmith-permalinks");
var templates   = require("metalsmith-templates");
var static      = require("metalsmith-static");
var metadata    = require("metalsmith-metadata");
var navbuilder  = require("./lib/nav-builder-plugin/index");
var locale      = require("./lib/locale/index");
var i18n        = require("./lib/i18n/index");
var i18nout     = require("./lib/i18n-out/index");
var contents    = require("./lib/contents-json/index");
var tutorialBuilder = require('./lib/tutorials/index');
var headingsidentifier = require("metalsmith-headings-identifier");

var env = null;
var args = process.argv.slice(2);
if (args.length) {
    env = args[0];
}

// Load partials
handlebars.registerPartial("head",
    fs.readFileSync(path.join(__dirname, "templates/partials/head.tmpl.html"), "utf-8"));
handlebars.registerPartial("navbar",
    fs.readFileSync(path.join(__dirname, "templates/partials/navbar.tmpl.html"), "utf-8"));
handlebars.registerPartial("usermanual-navbar",
    fs.readFileSync(path.join(__dirname, "templates/partials/usermanual-navbar.tmpl.html"), "utf-8"));
handlebars.registerPartial("usermanual-contents",
    fs.readFileSync(path.join(__dirname, "templates/partials/usermanual-contents.tmpl.html"), "utf-8"));
handlebars.registerPartial("tutorial-navbar",
    fs.readFileSync(path.join(__dirname, "templates/partials/tutorial-navbar.tmpl.html"), "utf-8"));
handlebars.registerPartial("tutorial-contents",
    fs.readFileSync(path.join(__dirname, "templates/partials/tutorial-contents.tmpl.html"), "utf-8"));
handlebars.registerPartial("header",
    fs.readFileSync(path.join(__dirname, "templates/partials/header.tmpl.html"), "utf-8"));
handlebars.registerPartial("title-banner",
    fs.readFileSync(path.join(__dirname, "templates/partials/title-banner.tmpl.html"), "utf-8"));
handlebars.registerPartial("scripts",
    fs.readFileSync(path.join(__dirname, "templates/partials/scripts.tmpl.html"), "utf-8"));
handlebars.registerPartial("analytics",
    fs.readFileSync(path.join(__dirname, "templates/partials/analytics.tmpl.html"), "utf-8"));
handlebars.registerPartial("footer",
    fs.readFileSync(path.join(__dirname, "templates/partials/footer.tmpl.html"), "utf-8"));


handlebars.registerPartial("shader-editor-navbar",
    fs.readFileSync(path.join(__dirname, "templates/partials/shader-editor-navbar.tmpl.html"), "utf-8"));
handlebars.registerPartial("shader-editor-contents",
    fs.readFileSync(path.join(__dirname, "templates/partials/shader-editor-contents.tmpl.html"), "utf-8"));

    // handlebars.registerHelper("", function (lang) {

handlebars.registerHelper("lang-selector", function (lang) {
    return "{{#if " + lang + "}}";
});

handlebars.registerHelper("lang-selector-close", function (lang) {
    return "{{/if}}";
});

// Convert relativeURL with a locale like en/manual to a full url with the
// desired locale e.g. http://developer.playcanvas.com/ja/manual
handlebars.registerHelper('locale-url', function (locale, relativeUrl) {
    return url.resolve('http://developer.playcanvas.com', path.join(locale, relativeUrl.substring(2)));
});

// store strings requested
var localization = {};

// links markdown override
var renderer = new marked.Renderer();

// make external links to open as new tabs
renderer.link = function(href, title, text) {
    var external = href.startsWith('http') && href.indexOf('developer.playcanvas.com') === -1;
    var out = '<a href="' + href + '"';
    if (title) out += ' title="' + title + '"';
    if (external) out += ' target="_blank"';
    out += '>' + text + '</a>';
    return out;
};

var m = new Metalsmith(__dirname);

m.source("content")
.concurrency(10)
.use(static({
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
}))

m.build(function (err, files) {
    console.log("done");
    if (err) {
        console.error(err);
    }
});
