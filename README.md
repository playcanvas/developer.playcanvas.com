# PlayCanvas Developer Site

This is source repository for the [PlayCanvas Developer Site](https://developer.playcanvas.com/). It is made up of static web content generated from Markdown files using [Docusaurus](https://docusaurus.io).

## How to build

Building the site requires an install of Node.js 18+.

    cd developer.playcanvas.com
    npm i
    npm run build

## How to serve

To serve the built site locally:

    npm run serve

This will automatically open the built site in your browser.

## Use 'start' for quick iteration

The `start` build command will automatically rebuild the site when changes are made in the `docs`, `src` or `static` folders.

    npm run start

## Update Tutorials

Tutorials are regular markdown files and can be edited directly. However if you change the front matter, ie the tags, title or thumbnail, you'll need to regenerate the tutorials index using `npm run generate-tutorial-data`. You'll also need to do this if you add or remove a tutorial.

## Update FAQ

The User Manual on the developer site has a FAQ page which can be found at `docs/user-manual/faq.md`. This is the only Markdown file which is generated from other files (located in the `faq` directory). If you would like to add additional FAQs, check them in to the `faq` directory and to regenerate `docs/user-manual/faq.md` run:

    npm run faq

## Localization

The Developer Site is translated via [Transifex](https://www.transifex.com/playcanvas/playcanvas-developer-site). To exchange data with Transifex, you will need the `tx` CLI tool. Instructions on setting up the `tx` tool can be found [here](https://developers.transifex.com/docs/cli#installation). Note that the first time you push with `tx`, you will need to enter the Transifex developer key (contact an Admin of the Transifex project to obtain this).

When anything in `docs` is updated, run:

    tx push --silent
    
Once translation acitivity on Transifex is complete, run:

    tx pull -l ja --silent

Then submit a PR with the updated language content.
