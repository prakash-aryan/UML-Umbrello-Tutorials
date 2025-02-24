// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UML Umbrello Tutorials',
  tagline: 'Learn UML diagramming with Umbrello 5',
  favicon: 'img/uml-logo.svg',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://prakash-aryan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/UML-Umbrello-Tutorials/',  // Changed for local development

  // GitHub pages deployment config
  organizationName: 'prakash-aryan',
  projectName: 'UML-Umbrello-Tutorials',

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
          editUrl:
            'https://github.com/prakash-aryan/UML-Umbrello-Tutorials/tree/main/',
        },
        blog: false,
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
      image: 'img/uml-logo.svg',
      navbar: {
        title: 'UML Umbrello Tutorials',
        logo: {
          alt: 'UML Umbrello Tutorials Logo',
          src: 'img/uml-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/prakash-aryan/UML-Umbrello-Tutorials',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Made by <a href="https://prakasharyan.com/">Prakash Aryan</a>`,
        links: [],  // Removed all links from the footer
      },
      // Updated colorMode settings
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Fixed prism settings
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;