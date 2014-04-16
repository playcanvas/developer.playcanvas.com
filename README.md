# PlayCanvas Developer Resources

This is this the static site for the PlayCanvas Developer Tools

## How to build

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
    node node_modules/http-server/bin/http-server build

## How to deploy

Deployment is made by pushing to default branch
