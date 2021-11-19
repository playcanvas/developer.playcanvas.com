# PlayCanvas Developer Site

This is source repository for the [PlayCanvas Developer Site](https://developer.playcanvas.com/). It is made up of static web content generated from Markdown files using [Metalsmith](https://metalsmith.io).

## How to build

Building the site requires `node` and `npm`.

    cd developer.playcanvas.com
    npm install
    node run build

## How to serve

To serve the site locally:

    npm run serve

Now visit http://localhost:51000 in your browser.

## Use 'watch' for quick iteration

The watch build command will automatically build the site when changes are made in the `content` directory. On macOS:

    npm run watch:osx

On Windows:

    npm run watch:windows

## Update CSS from SCSS

The site uses Sass to generate the CSS. To generate, run:

    npm run sass

## Update FAQ

The User Manual on the developer site has a FAQ page which can be found at `content/en/user-manual/faq.md`. This is the only Markdown file which is generated from other files (located in the `faq` directory). If you would like to add additional FAQs, check them in to the `faq` directory and to regenerate `content/en/user-manual/faq.md` run:

    npm run faq

## Test for broken links

Start the localhost server (as described in the [How to serve](#how-to-serve) section) and in another terminal window run:

    npm run test-link:en

Or to test against a live or staging server, pass the URL base as an argument:

    npm run test-link:en "https://developer.playcanvas.com"

## Style Guide

### Code Blocks

When inserting code into a Markdown file, use backticks. For example:

    ```javascript
    console.log('Hello World!);
    ```

Be sure to specify the relevant language to enable syntax highlighting. Valid values are: `javascript`, `html`, `css`, `json`, `php`. If you don't want syntax highlighting, omit the language specifier.

### Hyperlinks

When writing a link in a Markdown file use the following format:

\[link text\]\[1\]

\[1\]: https://example.com

The only exception is writing FAQ Markdown files (located in the `faq` folder). For those, use the `\[link text\](url)` format.
