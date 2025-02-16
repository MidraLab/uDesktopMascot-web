import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "uDesktopMascot",
  tagline: "uDesktopMascot Documentation",
  favicon: "img/icon.jpg",

  // サイトのプロダクションURLをここに設定します
  url: "https://midralab.github.io/",
  // サイトが提供される/<baseUrl>/パス名を設定します
  // GitHubページのデプロイメントの場合、通常は'/<projectName>/'です
  baseUrl: "/uDesktopMascot-web/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MidraLab", // Usually your GitHub org/user name.
  projectName: "uDesktopMascot-web", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MidraLab/uDesktopMascot-web/blob/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MidraLab/uDesktopMascot-web/blob/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/icon.jpg",
    navbar: {
      title: "uDesktopMascot",
      logo: {
        alt: "uDesktopMascot Logo",
        src: "img/icon.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "creatorSidebar",
          position: "left",
          label: "クリエーター向け",
        },
        {
          type: "docSidebar",
          sidebarId: "developerSidebar",
          position: "left",
          label: "開発者向け",
        },
        {
          href: "https://github.com/MidraLab/uDesktopMascot",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/midra_lab",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/MidraLab/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MidraLab. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
