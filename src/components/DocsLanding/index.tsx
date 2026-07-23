import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import SearchBar from '@theme/SearchBar';

import styles from './styles.module.css';

const categories = [
  {
    icon: '🚀',
    title: 'Applications',
    description: 'Deploy production-ready self-hosted applications using Docker, Docker Compose, Kubernetes, and Helm.',
    count: '6 Guides',
    to: '/docs/applications',
  },
  {
    icon: '☸️',
    title: 'Kubernetes',
    description: 'Deploy self-hosted applications on Kubernetes and K3s with Helm, ingress, persistent storage, and TLS.',
    count: '2 Guides',
    to: '/docs/kubernetes',
  },
  {
    icon: '📊',
    title: 'Observability',
    description: 'Instrument, monitor, and troubleshoot systems with OpenTelemetry and SigNoz.',
    count: '1 Guide',
    to: '/docs/observability',
  },
];

const technologies = [
  {label: 'Docker', to: '/docs/applications'},
  {label: 'Docker Compose', to: '/docs/applications'},
  {label: 'Kubernetes', to: '/docs/kubernetes'},
  {label: 'Helm', to: '/docs/kubernetes'},
  {label: 'Traefik', to: '/docs/applications'},
  {label: 'PostgreSQL', to: '/docs/applications'},
  {label: 'Redis', to: '/docs/applications'},
  {label: 'OpenTelemetry', to: '/docs/observability'},
  {label: 'SigNoz', to: '/docs/observability'},
  {label: 'Grafana', to: '/docs/observability'},
];

const recentlyUpdated = [
  {
    date: 'Jul 2026',
    title: 'Deploy Planka',
    publishedOn: 'Published on Vultr',
    to: 'https://docs.vultr.com/how-to-deploy-planka-open-source-project-management-tool',
  },
  {
    date: 'Jul 2026',
    title: 'Deploy Kestra',
    publishedOn: 'Published on Vultr',
    href: 'https://docs.vultr.com/how-to-deploy-kestra-open-source-workflow-orchestration-platform',
  },
  {
    date: 'Jun 2026',
    title: 'BookStack + SigNoz',
    publishedOn: 'Published on Dev.to',
    href: 'https://dev.to/abdultalha08/instrument-bookstack-with-opentelemetry-and-signoz-using-docker-2191',
  },
];

const publications = [
  {label: 'Vultr Docs', href: 'https://docs.vultr.com/author/abdul-talha'},
  {label: 'freeCodeCamp', href: 'https://freecodecamp.org/news/author/abdultalha3226/'},
  {label: 'Civo', href: 'https://www.civo.com/authors/abdul-talha'},
  {label: 'Dev.to', href: 'https://dev.to/abdultalha08'},
  
];

const workflowSteps = ['Research', 'Deploy', 'Debug', 'Validate', 'Document'];

function ArrowIcon() {
  return <span className={styles.arrow} aria-hidden="true" />;
}

function CardShell({children, className}: {children: React.ReactNode; className?: string}) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}

export default function DocsLanding(): JSX.Element {
  return (
    <main className={styles.page}>
      <section className={clsx(styles.section, styles.heroSection)} aria-labelledby="docs-hero-title">
        <div className="container">
          <div className={styles.hero}>
            <Heading as="h1" id="docs-hero-title" className={styles.heroTitle}>
              Documentation Library
            </Heading>
            <p className={styles.heroDescription}>
              Production-ready guides for deploying, operating, and maintaining self-hosted open-source software.
            </p>

            <div className={styles.heroSearch}>
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="categories-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Documentation categories</p>
            <Heading as="h2" id="categories-title" className={styles.sectionTitle}>
              Browse by category.
            </Heading>
            <p className={styles.sectionDescription}>
              Find production-ready guides by application, operational task, or underlying technology.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link key={category.title} to={category.to} className={styles.categoryLink}>
                <CardShell>
                  <div className={styles.categoryCardBody}>
                    <div className={styles.categoryTopRow}>
                      <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                      <ArrowIcon />
                    </div>
                    <h3 className={styles.cardTitle}>{category.title}</h3>
                    <p className={styles.cardText}>{category.description}</p>
                    <span className={styles.cardCount}>{category.count}</span>
                  </div>
                </CardShell>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="tech-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Popular technologies</p>
            <Heading as="h2" id="tech-title" className={styles.sectionTitle}>
              Browse by technology.
            </Heading>
            <p className={styles.sectionDescription}>
              Jump straight to the tools you are deploying, from containers and orchestration to observability.
            </p>
          </div>

          <ul className={styles.techGrid} aria-label="Popular technologies">
            {technologies.map((tech) => (
              <li key={tech.label}>
                <Link to={tech.to} className={styles.techChip}>
                  {tech.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="recent-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Recently updated</p>
            <Heading as="h2" id="recent-title" className={styles.sectionTitle}>
              The latest additions to the documentation library.
            </Heading>
            <p className={styles.sectionDescription}>
              New and updated guides, published as deployments are tested, validated, and documented.
            </p>
          </div>

          <ol className={styles.timeline} aria-label="Recently updated guides">
            {recentlyUpdated.map((item) => {
              const content = (
                <>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <span className={styles.timelineDot} aria-hidden="true" />
                  <span className={styles.timelineBody}>
                    <span className={styles.timelineTitle}>{item.title}</span>
                    <span className={styles.timelineMeta}>{item.publishedOn}</span>
                  </span>
                </>
              );

              return (
                <li key={item.title} className={styles.timelineItem}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.timelineLink}>
                      {content}
                    </Link>
                  ) : (
                    <Link to={item.to} className={styles.timelineLink}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="workflow-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Documentation workflow</p>
            <Heading as="h2" id="workflow-title" className={styles.sectionTitle}>
              Every guide follows the same workflow.
            </Heading>
            <p className={styles.sectionDescription}>
              From researching official docs to publishing validated content, each guide goes through the same hands-on process.
            </p>
          </div>

          <ol className={styles.workflow} aria-label="Documentation workflow steps">
            {workflowSteps.map((step, index) => (
              <li key={step} className={styles.workflowItem}>
                <div className={styles.workflowStep}>
                  <span className={styles.workflowIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.workflowLabel}>{step}</span>
                </div>
                {index < workflowSteps.length - 1 ? (
                  <span className={styles.workflowArrow} aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="publications-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Published on</p>
            <Heading as="h2" id="publications-title" className={styles.sectionTitle}>
              Where this documentation is published.
            </Heading>
            <p className={styles.sectionDescription}>
              Guides and tutorials featured across leading developer and DevOps publications.
            </p>
          </div>

          <div className={styles.publicationGrid}>
            {publications.map((pub) => {
              const label = <span className={styles.publicationLabel}>{pub.label}</span>;

              return pub.href ? (
                <Link
                  key={pub.label}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}>
                  {label}
                </Link>
              ) : (
                <Link key={pub.label} to={pub.to} className={styles.publicationLink}>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="docs-cta-title">
        <div className="container">
          <CardShell className={styles.ctaShell}>
            <div className={styles.ctaInner}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Explore the library</p>
                <Heading as="h2" id="docs-cta-title" className={styles.sectionTitle}>
                  Explore the Documentation Library
                </Heading>
                <p className={styles.sectionDescription}>
                  Browse every guide by application, technology, or operational task.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link className="button button--primary button--lg" to="/docs/applications">
                  Browse All Guides
                </Link>
              </div>
            </div>
          </CardShell>
        </div>
      </section>
    </main>
  );
}