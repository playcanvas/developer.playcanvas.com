// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PlayCanvas Developer Site',
  tagline: 'Start learning PlayCanvas today!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developer.playcanvas.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'playcanvas', // Usually your GitHub org/user name.
  projectName: 'developer.playcanvas.com', // Usually your repo name.

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja']
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [ '@docusaurus/plugin-client-redirects', {
      redirects: [
        { from: ['/api', '/en/api'], to: 'https://api.playcanvas.com' },
        { from: ['/user-manual/scripting/loading-order/', '/en/user-manual/scripting/loading-order'], to: '/user-manual/scripting/classic/loading-order/' },
      ],
      createRedirects: (existingPath) => {
        // Create redirects from old paths prefixed with /en
        const redirects = [
          `/en${existingPath}`
        ];

        if (existingPath.includes('/user-manual/editor/')) {
          const redirect = existingPath.replace('/user-manual/editor/', '/user-manual/designer/');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/scenes/')) {
          const redirect = existingPath.replace('/user-manual/scenes/', '/user-manual/packs/');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/interface/assets')) {
          const redirect = existingPath.replace('/user-manual/editor/interface/assets', '/user-manual/editor/assets');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/interface/hierarchy')) {
          const redirect = existingPath.replace('/user-manual/editor/interface/hierarchy', '/user-manual/editor/hierarchy');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/interface/inspector')) {
          const redirect = existingPath.replace('/user-manual/editor/interface/inspector', '/user-manual/editor/inspector');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/interface/toolbar')) {
          const redirect = existingPath.replace('/user-manual/editor/interface/toolbar', '/user-manual/editor/toolbar');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/interface/viewport')) {
          const redirect = existingPath.replace('/user-manual/editor/interface/viewport', '/user-manual/editor/viewport');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/templates/')) {
          const redirect = existingPath.replace('/user-manual/editor/templates/', '/user-manual/templates/');
          redirects.push(redirect);
        }

        if (existingPath.includes('/user-manual/editor/version-control/')) {
          const redirect = existingPath.replace('/user-manual/editor/version-control/', '/user-manual/version-control/');
          redirects.push(redirect);
        }

        return redirects;
      }
    }],
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playcanvas/developer.playcanvas.com/tree/dev/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '69QRBNV3NH',
        apiKey: '1a45aa069915da9c841ad1a9c225e815',
        indexName: 'developer-playcanvas',
        contextualSearch: true,
      },
      // Replace with your project's social card
      image: 'img/playcanvas-social-card.jpg',
      navbar: {
        title: 'PlayCanvas Docs',
        logo: {
          alt: 'PlayCanvas Logo',
          src: 'img/playcanvas.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'left',
            label: 'User Manual',
            path: '/user-manual',
          },
          {
            to: '/tutorials/',
            label: 'Tutorials',
            position: 'left',
          },
          {
            href: 'https://api.playcanvas.com',
            label: 'API',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            'aria-label': 'Discord Invite',
            'className': 'navbar--discord-link',
            'href': 'https://discord.gg/RSaMRzg',
            'position': 'right',
          },
          {
            'aria-label': 'GitHub Repository',
            'className': 'navbar--github-link',
            'href': 'https://github.com/playcanvas/engine',
            'position': 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Manual',
                to: '/user-manual/',
              },
              {
                label: 'Tutorials',
                to: '/tutorials/',
              },
              {
                label: 'API Reference',
                href: 'https://api.playcanvas.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter / X',
                href: 'https://twitter.com/playcanvas',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/playcanvas',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/playcanvas',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.playcanvas.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/RSaMRzg',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/playcanvas',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.playcanvas.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/playcanvas',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@playcanvas',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlayCanvas Ltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['glsl'],
      },
    }),
};

export default config;
