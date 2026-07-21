import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Abdul Talha',
  tagline:
    'Production-ready DevOps documentation for self-hosted open-source software.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.abdultalha.dev',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'abdultalha0862',
  projectName: 'technical-writing-portfolio',

  onBrokenLinks: 'throw',

  scripts: [
    {
      src: 'https://gc.zgo.at/count.js',
      async: true,
      'data-goatcounter': 'https://abdultalha.goatcounter.com/count',
    },
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Abdul Talha',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'Production-ready DevOps documentation for self-hosted open-source software, Docker, Kubernetes, Linux, and cloud deployments.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'DevOps Technical Writer, Docker, Kubernetes, Self-Hosted, Open Source, Technical Documentation, Linux, Cloud',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    metadata: [
      {
        name: 'linkedin',
        content: 'https://linkedin.com/in/abdul-talha',
      },
      {
        name: 'github',
        content: 'https://github.com/abdultalha0862',
      },
    ],

    navbar: {
      title: 'Abdul Talha',
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/abdultalha0862',
          label: 'GitHub',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
        {
          href: 'https://linkedin.com/in/abdul-talha',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://docs.vultr.com/author/abdul-talha',
          label: 'Vultr Author',
          position: 'right',
        },
        {
          href: 'https://www.freecodecamp.org/news/author/abdultalha3226/',
          label: 'freeCodeCamp',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Abdul Talha',
          items: [
            {
              html: `
                <p class="footer__description">
                  DevOps Technical Writer<br />
                  Production-ready documentation for developers and DevOps teams.
                </p>
              `,
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Deployment Guides',
              to: '/docs/applications',
            },
            {
              label: 'Kubernetes',
              to: '/docs/kubernetes',
            },
            {
              label: 'Observability',
              to: '/docs/observability',
            },
          ],
        },
        {
          title: 'Publications',
          items: [
            {
              label: 'Vultr Docs',
              href: 'https://docs.vultr.com/author/abdul-talha',
            },
            {
              label: 'freeCodeCamp',
              href: 'https://www.freecodecamp.org/news/author/abdultalha3226/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/abdultalha0862',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/abdul-talha',
            },
            {
              label: 'Email',
              href: 'mailto:abdultalha3226@gmail.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Abdul Talha<span class="footer__separator">•</span>Built with Docusaurus • Markdown • GitHub Pages<span class="footer__separator">•</span>Docs-as-Code Workflow`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;