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
    ./serve.sh

On Windows:

    cd developer.playcanvas.com
    node node_modules/http-server/bin/http-server build

## How to deploy

Deployment is made by pushing to default branch
