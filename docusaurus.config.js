// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlocPalX API docs',
  tagline: "Official documentation for the BlocPalX APIs and streams.",
  favicon: 'img/blocpal_favicon.png',

  // Set the production url of your site here
  url: 'https://blocpal-inc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/exchange-api-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Blocpal-Inc', // Usually your GitHub org/user name.
  projectName: 'exchange-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Blocpal-Inc/exchange-api-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/blocpalX_social.png',
      navbar: {
        title: 'BlocPalX API',
        logo: {
          alt: 'BlocPal logo',
          src: 'img/blocpal_favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docApiSidebar',
            position: 'left',
            label: 'Docs',
          },
          
          {
            href: 'https://github.com/Blocpal-Inc/exchange-api-docs',
            label: 'GitHub',
            position: 'right',
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
                label: 'BlocPalX API',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/tvcTwPT9Bt',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/blocpal',
              },
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/Blocpal-Inc/exchange-api-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BlocPal Int.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
