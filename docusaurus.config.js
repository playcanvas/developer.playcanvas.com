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

  plugins: [
    [ '@docusaurus/plugin-client-redirects', {
      redirects: [
        { from: ['/api', '/en/api'], to: 'https://api.playcanvas.com' }
      ],
      createRedirects: (path) => {
        path = path.replace('/user-manual/editor/', '/user-manual/designer/');
        path = path.replace('/user-manual/scenes/', '/user-manual/packs/');
        path = path.replace('/user-manual/version-control/', '/user-manual/editor/version-control/');

        return `/en${path}`;
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
