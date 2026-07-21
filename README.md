# Abdul Talha — DevOps Documentation Portfolio



Production-ready DevOps documentation for self-hosted open-source software, published at **[docs.abdultalha.dev](https://docs.abdultalha.dev)**.

This site is a technical-writing portfolio built with a **docs-as-code** workflow: content is authored in Markdown/MDX, versioned in Git, built with [Docusaurus](https://docusaurus.io/), and deployed automatically to GitHub Pages via GitHub Actions.

## Contents

The documentation covers hands-on, deployment-focused guides across several areas:

- **Applications** — Self-hosting guides for tools such as Activepieces, AFFiNE, Docmost, Kestra, Planka, and Uptime Kuma.
- **Kubernetes** — Deploying workloads with k3s and Helm (e.g. AFFiNE on k3s, OpenProject via Helm).
- **Observability** — Monitoring and tracing setups (e.g. BookStack with SigNoz).
- **Operational guides, operations, technologies, and notes** — Supporting reference material and day-to-day runbooks.

## Tech Stack

- [Docusaurus 3](https://docusaurus.io/) (React 19, TypeScript)
- Local full-text search via [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)
- GitHub Pages hosting with a custom domain
- GitHub Actions for CI/CD

## Project Structure

```text
.
├── docs/                  # Documentation content (Markdown/MDX)
│   ├── applications/       # Self-hosting application guides
│   ├── kubernetes/         # Kubernetes / Helm guides
│   ├── observability/      # Monitoring & tracing guides
│   └── ...
├── src/
│   ├── components/         # Custom React components (homepage, about, etc.)
│   ├── css/                # Global styles
│   └── pages/              # Standalone pages (about, contact, case studies)
├── static/                # Static assets served at the site root
│   ├── img/                # Images and favicon
│   └── CNAME               # Custom domain for GitHub Pages
├── .github/workflows/      # CI/CD (GitHub Actions)
├── docusaurus.config.ts    # Site configuration
├── sidebars.ts             # Sidebar structure
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) **20 or newer** (see the `engines` field in `package.json`)
- npm (bundled with Node.js)

## Getting Started

Install dependencies:

```bash
npm install
```

Start a local development server (opens a browser with live reload):

```bash
npm run start
```

Type-check the project:

```bash
npm run typecheck
```

## Build

Generate the static production site into the `build/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run serve
```

## Contributing

Documentation lives under `docs/` as Markdown/MDX files. To add or edit a guide, update the relevant file, run `npm run start` to preview locally, and open a pull request. The CI workflow will build the site to validate your changes.

## License

© Abdul Talha. All rights reserved unless stated otherwise.
