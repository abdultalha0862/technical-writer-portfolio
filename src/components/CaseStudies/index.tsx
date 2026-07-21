import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const caseStudies = [
  {
    status: 'Featured',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['Docker', 'Linux', 'Traefik'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
  {
    status: 'Published',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['Kubernetes', 'Helm', 'Ingress'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
  {
    status: 'Draft',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['TLS', 'HTTPS', 'Security'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
  {
    status: 'Published',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['Monitoring', 'Grafana', 'Prometheus'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
  {
    status: 'Featured',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['Backups', 'Updates', 'Maintenance'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
  {
    status: 'Draft',
    title: 'Project Title',
    summary: 'Placeholder summary.',
    technologies: ['Debugging', 'Logs', 'Recovery'],
    challenge: 'Placeholder challenge.',
    solution: 'Placeholder solution.',
    outcome: 'Placeholder outcome.',
  },
];

function ArrowIcon() {
  return <span className={styles.arrow} aria-hidden="true" />;
}

export default function CaseStudies(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`Case Studies | ${siteConfig.title}`} description="Placeholder case studies landing page">
      <main className={styles.page}>
        <section className={clsx(styles.section, styles.hero)} aria-labelledby="case-studies-title">
          <div className="container">
            <div className={styles.heroInner}>
              <p className={styles.eyebrow}>CASE STUDIES</p>
              <Heading as="h1" id="case-studies-title" className={styles.title}>
                Placeholder heading.
              </Heading>
              <p className={styles.description}>Placeholder description.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="case-studies-grid-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="case-studies-grid-title" className={styles.sectionTitle}>
                Placeholder section heading.
              </Heading>
              <p className={styles.sectionDescription}>Placeholder description.</p>
            </div>

            <div className={styles.grid}>
              {caseStudies.map((item) => (
                <article key={`${item.title}-${item.status}`} className={styles.card}>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTopRow}>
                      <span className={styles.statusBadge}>{item.status}</span>
                      <ArrowIcon />
                    </div>

                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.summary}</p>

                    <div className={styles.metaBlock}>
                      <span className={styles.metaLabel}>Technologies</span>
                      <div className={styles.tagRow}>
                        {item.technologies.map((technology) => (
                          <span key={technology} className={styles.tag}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.detailStack}>
                      <div>
                        <span className={styles.metaLabel}>Challenge</span>
                        <p className={styles.detailText}>{item.challenge}</p>
                      </div>
                      <div>
                        <span className={styles.metaLabel}>Solution</span>
                        <p className={styles.detailText}>{item.solution}</p>
                      </div>
                      <div>
                        <span className={styles.metaLabel}>Outcome</span>
                        <p className={styles.detailText}>{item.outcome}</p>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <Link className="button button--secondary button--sm" to="/docs/intro">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className={clsx(styles.card, styles.featuredCard)}>
              <div className={styles.cardBody}>
                <p className={styles.eyebrow}>Featured case study</p>
                <h2 className={styles.featuredTitle}>Placeholder featured case study title.</h2>
                <p className={styles.cardText}>Placeholder summary.</p>
                <div className={styles.featuredMeta}>
                  <span className={styles.tag}>Placeholder Tag</span>
                  <span className={styles.tag}>Placeholder Tag</span>
                </div>
              </div>
            </article>

            <div className={styles.ctaRow}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                View Complete Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}