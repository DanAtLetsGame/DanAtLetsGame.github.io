// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lets Game!',
  tagline: '',
  favicon: 'img/letsgameicon.jpg',

  // Set the production url of your site here
  url: 'https://DanAtLetsGame.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'DanAtLetsGame',
  projectName: 'DanAtLetsGame.github.io',
  deploymentBranch: 'main',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'fa', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/letsgameicon.jpg',
      navbar: {
        title: 'Bringing Gamers Together',
        //logo: {
          //alt: 'My Site Logo',
          //src: 'img/letsgameicon.jpg',
        //},
        items: [
          {
            href: 'https://discord.gg/XcZBaEmA38',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Links',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'Rules',
                to: '/rules',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/XcZBaEmA38'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LetsGame.org - Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
