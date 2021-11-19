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
    npm install
    node run build

## How to serve

To serve the site locally:

    npm run serve

Now visit http://localhost:51000 in your browser.

## Use 'watch' for quick iteration

The watch build command will automatically build the site when changes are made in the `content` directory.

    npm run watch:osx

On Windows:

    npm run watch:windows

## Update CSS from SCSS

The site uses Sass to generate the CSS. To generate, run:

    npm run sass

## Test for broken links

Start the localhost server from [How to server](#how-to-serve) and in another terminal window, run:

    npm run test-link:en

Or to test against a live or staging server, pass the URL base as an argument:

    npm run test-link:en "https://developer.playcanvas.com"
