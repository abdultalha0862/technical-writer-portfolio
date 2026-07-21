import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const docs = [
  {
    publishedOn: 'Published on Vultr',
    title: 'Deploy Kestra',
    summary: 'Deploy Kestra with Docker Compose and a PostgreSQL backend, then build and run automated workflows from the web interface.',
    tags: ['Docker', 'PostgreSQL', 'Traefik'],
    type: 'Tutorial',
    href: 'https://docs.vultr.com/how-to-deploy-kestra-open-source-workflow-orchestration-platform',
  },
  {
    publishedOn: 'Published on Vultr',
    title: 'Deploy Planka',
    summary: 'Self-hosted kanban board for project collaboration, deployed with Docker Compose and a PostgreSQL backend.',
    tags: ['Docker', 'PostgreSQL', 'Kanban'],
    type: 'Tutorial',
    href: 'https://example.com/planka-placeholder',
  },
  {
    publishedOn: 'Published Portfolio Docs',
    title: 'Deploy OpenProject on Kubernetes Using Helm Charts',
    summary: 'Deploy OpenProject on Kubernetes using Helm charts with persistent storage, PostgreSQL, and TLS for team project management.',
    tags: ['Kubernetes', 'Helm', 'PostgreSQL'],
    type: 'Production',
    href: '/docs/kubernetes/openproject-helm',
  },
  {
    publishedOn: 'Published on Dev.to',
    title: 'Instrument BookStack with OpenTelemetry and SigNoz Using Docker',
    summary: 'Build an end-to-end observability pipeline by instrumenting BookStack with OpenTelemetry and exporting traces to SigNoz using Docker.',
    tags: ['Docker', 'OpenTelemetry', 'SigNoz'],
    type: 'Tutorial',
    href: 'https://dev.to/abdultalha08/instrument-bookstack-with-opentelemetry-and-signoz-using-docker-2191',
  },
];

export default function FeaturedDocs(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="featured-docs-title">
      <div className="container">
        <div className={clsx(shared.sectionHeader, styles.header)}>
          <p className={shared.eyebrow}>FEATURED DOCUMENTATION</p>
          <Heading as="h2" id="featured-docs-title" className={shared.sectionTitle}>
            Featured Documentation
          </Heading>
          <p className={shared.description}>A curated selection of my strongest production deployment guides — each tested, validated, and published.</p>
        </div>

        <div className={styles.grid} role="list" aria-label="Featured documentation">
          {docs.map((doc, index) => (
            <Link
              key={`${doc.title}-${index}`}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`${doc.publishedOn}: ${doc.title}`}
              role="listitem">
              <article className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.publishedBadge}>{doc.publishedOn}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{doc.title}</h3>
                  <p className={styles.cardSummary}>{doc.summary}</p>

                  <div className={styles.tagRow} aria-label={`${doc.title} tags`}>
                    {doc.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.typeBadge}>{doc.type}</span>
                    <span className={styles.arrow} aria-hidden="true" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link className="button button--secondary button--lg" to="/docs">
            View All Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}