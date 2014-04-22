var path        = require("path");
var fs          = require("fs");

var handlebars  = require("handlebars");

var Metalsmith  = require("metalsmith");
var markdown    = require("metalsmith-markdown");
var permalinks  = require("metalsmith-permalinks");
var templates   = require("metalsmith-templates");
var static      = require("metalsmith-static");
var metadata    = require("metalsmith-metadata");
var metallic    = require("metalsmith-metallic");
var navbuilder  = require("./lib/nav-builder-plugin/index");

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
handlebars.registerPartial("header",
    fs.readFileSync(path.join(__dirname, "templates/partials/header.tmpl.html"), "utf-8"));
handlebars.registerPartial("title-banner",
    fs.readFileSync(path.join(__dirname, "templates/partials/title-banner.tmpl.html"), "utf-8"));
handlebars.registerPartial("scripts",
    fs.readFileSync(path.join(__dirname, "templates/partials/scripts.tmpl.html"), "utf-8"));
handlebars.registerPartial("analytics",
    fs.readFileSync(path.join(__dirname, "templates/partials/analytics.tmpl.html"), "utf-8"));

var m = new Metalsmith(__dirname);

m.source("content")
    .use(markdown())
    .use(permalinks({
        pattern: ":filename"
    }))
    .use(metadata());

// set environment
m.metadata().local = (env === null);
m.metadata().prod = (env === "prod");
m.metadata().dev = (env === "dev");

    m.use(navbuilder("user-manual")({
        engine: handlebars,
        template: path.join(__dirname, "templates/partials/navigation.tmpl.html"),
        partialName: "user-manual-navigation"
    }))
    .use(navbuilder("tutorials")({
        engine: handlebars,
        template: path.join(__dirname, "templates/partials/navigation.tmpl.html"),
        partialName: "tutorials-navigation"
    }))
    .use(templates({
        engine: "handlebars",
        directory: "templates",
        default: "page.tmpl.html"
    }))
    .use(static({
        src: "public",
        dest: "."
    }))
    .use(metallic())
    .build();
