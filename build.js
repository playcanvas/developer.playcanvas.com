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

// Load partials
handlebars.registerPartial("header", 
    fs.readFileSync(path.join(__dirname, "templates/partials/header.tmpl.html"), "utf-8"));
handlebars.registerPartial("title-banner", 
    fs.readFileSync(path.join(__dirname, "templates/partials/title-banner.tmpl.html"), "utf-8"));

var m = new Metalsmith(__dirname);

m.source("content")
    .use(markdown())
    .use(permalinks({
        pattern: ":filename"
    }))
    .use(metadata({

    }))
    .use(navbuilder({
        engine: handlebars,
        template: path.join(__dirname, "templates/partials/navigation.tmpl.html")
    }))
    .use(templates({
        engine: "handlebars",
        directory: "templates",
        default: "frontpage.tmpl.html"
    }))
    .use(static({
        src: "public",
        dest: "."
    }))
    .use(metallic())
    .build();