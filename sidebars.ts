import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Applications',
      link: {
        type: 'doc',
        id: 'applications/index',
      },
      items: [
        {
          type: 'category',
          label: 'Kestra',
          link: {type: 'doc', id: 'applications/kestra/index'},
          items: [
            'applications/kestra/deploy',
            'applications/kestra/ai-summarizer',
          ],
        },
        {
          type: 'category',
          label: 'Activepieces',
          items: [
            'applications/activepieces/deploy',
          ],
        },
        {
          type: 'category',
          label: 'AFFiNE',
          link: {type: 'doc', id: 'applications/affine/index'},
          items: [
            'applications/affine/deploy',
            'applications/affine/install-local',
          ],
        },
        {
          type: 'category',
          label: 'Planka',
          items: [
            'applications/planka/deploy',
          ],
        },
        {
          type: 'category',
          label: 'Docmost',
          link: {type: 'doc', id: 'applications/docmost/index'},
          items: [
            'applications/docmost/deploy',
            'applications/docmost/secure',
            'applications/docmost/monitor',
            'applications/docmost/logging',
            'applications/docmost/backup',
            'applications/docmost/upgrade',
          ],
        },
        {
          type: 'category',
          label: 'Uptime Kuma',
          items: [
            'applications/uptime-kuma/install-local',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes',
      link: {
        type: 'doc',
        id: 'kubernetes/index',
      },
      items: [
        'kubernetes/affine-k3s',
        'kubernetes/openproject-helm',
      ],
    },
    {
      type: 'category',
      label: 'Observability',
      link: {
        type: 'doc',
        id: 'observability/index',
      },
      items: [
        'observability/bookstack-signoz',
      ],
    },
  ],
};

export default sidebars;