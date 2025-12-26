import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Karajan610's Lab",
  tagline:
    "저의 경험을 통해 많은 사람들이 도움을 받고, 그 과정에서 선한 영향력을 발휘하며 모두가 함께 성장했으면 좋겠습니다.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://karajan610.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "karajan610", // Usually your GitHub org/user name.
  projectName: "karajan610.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/karajan610/karajan610.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/karajan610/karajan610.github.io/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Karajan Lab",
      logo: {
        alt: "Karajan Lab Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/docs/books", label: "Book", position: "left" },
        {
          href: "https://github.com/karajan610",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Book",
              to: "/docs/books",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/karajan610",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Source",
              href: "https://github.com/karajan610/karajan610.github.io",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Karajan Lab. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
