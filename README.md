# PlayCanvas Developer Resources

This is this the static site for the PlayCanvas Developer Tools

## Style Guide

### Links

When writing a link in a markdown file use the following format:

\[Link Text\]\[1\]

\[1\]: /link/url

## How to build

Building the site requires `node` and `npm`

    cd developer.playcanvas.com
    make

On Windows:

    cd developer.playcanvas.com
    npm install
    node build.js

## How to serve

To serve the site locally:

    cd developer.playcanvas.com
    npm run serve

On Windows:

    cd developer.playcanvas.com
    node node_modules/http-server/bin/http-server build

## Use 'watch' for quick iteration

The watch build command will automatically build the site when changes are made in the `content` directory.

    cd developer.playcanvas.com
    npm install
    npm run watch:osx

On Windows:

    cd developer.playcanvas.com
    npm install
    npm run watch:windows

## Update CSS from SCSS

The site uses Sass to generate the CSS. To generate, run:

    cd developer.playcanvas.com
    npm install
    npm run sass

## How to deploy

Deployment is made by pushing to default branch
