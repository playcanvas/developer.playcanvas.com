# PlayCanvas Developer Site

This is source repository for the [PlayCanvas Developer Site](https://developer.playcanvas.com/). It is made up of static web content generated from Markdown files using [Metalsmith](https://metalsmith.io).

## How to build

Building the site requires `node` and `npm`.

    cd developer.playcanvas.com
    npm install
    npm run build

## How to serve

To serve the site locally:

    npm run serve

Now visit http://localhost:51000 in your browser.

## Use 'watch' for quick iteration

The watch build command will automatically rebuild the site when changes are made in the `content` or `public` folders.

    npm run watch

## Update CSS from SCSS

The site uses Sass to generate the CSS. To generate, run:

    npm run sass

## Update FAQ

The User Manual on the developer site has a FAQ page which can be found at `content/en/user-manual/faq.md`. This is the only Markdown file which is generated from other files (located in the `faq` directory). If you would like to add additional FAQs, check them in to the `faq` directory and to regenerate `content/en/user-manual/faq.md` run:

    npm run faq

## Testing

To validate the generated HTML files in the `build` folder, run:

    npm run lint:html

To scan for broken hyperlinks, run:

    npm run test:links
