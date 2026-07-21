import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const projects = [
  {
    title: 'Open Source Project',
    description: 'Placeholder description.',
    badges: ['Documentation', 'Frontend', 'Community'],
    tags: ['JavaScript', 'Node.js', 'Git'],
  },
  {
    title: 'Open Source Project',
    description: 'Placeholder description.',
    badges: ['Technical Writing', 'Bug Fixes', 'Documentation'],
    tags: ['Docker', 'Markdown', 'GitHub'],
  },
  {
    title: 'Open Source Project',
    description: 'Placeholder description.',
    badges: ['Engineering', 'Documentation', 'Open Source'],
    tags: ['TypeScript', 'React', 'Open Source'],
  },
];

const stats = [
  {label: 'Projects Contributed', value: '00'},
  {label: 'Documentation PRs', value: '00'},
  {label: 'Issues Resolved', value: '00'},
  {label: 'Community Contributions', value: '00'},
];

function ArrowIcon() {
  return <span className={styles.arrow} aria-hidden="true" />;
}

export default function OpenSourcePage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`Open Source | ${siteConfig.title}`} description="Placeholder open source page">
      <main className={styles.page}>
        <section className={clsx(styles.section, styles.hero)} aria-labelledby="open-source-title">
          <div className="container">
            <div className={styles.heroInner}>
              <p className={styles.eyebrow}>OPEN SOURCE</p>
              <Heading as="h1" id="open-source-title" className={styles.title}>
                Contributing to the open-source ecosystem.
              </Heading>
              <p className={styles.description}>Placeholder description.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="open-source-summary-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="open-source-summary-title" className={styles.sectionTitle}>
                Placeholder contribution summary.
              </Heading>
              <p className={styles.sectionDescription}>Placeholder description.</p>
            </div>

            <div className={styles.summaryGrid}>
              <article className={styles.summaryCard}>
                <div className={styles.summaryValue}>00</div>
                <div className={styles.summaryLabel}>Placeholder metric</div>
              </article>
              <article className={styles.summaryCard}>
                <div className={styles.summaryValue}>00</div>
                <div className={styles.summaryLabel}>Placeholder metric</div>
              </article>
              <article className={styles.summaryCard}>
                <div className={styles.summaryValue}>00</div>
                <div className={styles.summaryLabel}>Placeholder metric</div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="open-source-timeline-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="open-source-timeline-title" className={styles.sectionTitle}>
                Contribution timeline.
              </Heading>
              <p className={styles.sectionDescription}>Placeholder description.</p>
            </div>

            <div className={styles.timeline}>
              {['Discover', 'Contribute', 'Review', 'Maintain'].map((step, index) => (
                <article key={step} className={styles.timelineCard}>
                  <div className={styles.timelineIndex}>{String(index + 1).padStart(2, '0')}</div>
                  <h3 className={styles.cardTitle}>{step}</h3>
                  <p className={styles.cardText}>Placeholder description.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="open-source-projects-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="open-source-projects-title" className={styles.sectionTitle}>
                Project grid.
              </Heading>
              <p className={styles.sectionDescription}>Placeholder description.</p>
            </div>

            <div className={styles.grid}>
              {projects.map((project, index) => (
                <Link key={`${project.title}-${index}`} to="/docs/intro" className={styles.cardLink} aria-label={project.title}>
                  <article className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.cardTop}>
                        <span className={styles.logoPlaceholder} aria-hidden="true">
                          GH
                        </span>
                        <div className={styles.linkIcons} aria-hidden="true">
                          <span className={styles.externalIcon} />
                          <span className={styles.githubIcon} />
                        </div>
                      </div>

                      <p className={styles.projectName}>Project Name</p>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardText}>{project.description}</p>

                      <div className={styles.badgeGroup}>
                        {project.badges.map((badge) => (
                          <span key={badge} className={styles.badge}>
                            {badge}
                          </span>
                        ))}
                      </div>

                      <div className={styles.tagGroup}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className={styles.cardFooter}>
                        <span className={styles.githubButton}>GitHub</span>
                        <ArrowIcon />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <section className={styles.communitySection} aria-label="Community section">
              <div className={styles.sectionHeader}>
                <Heading as="h2" className={styles.sectionTitle}>
                  Community section.
                </Heading>
                <p className={styles.sectionDescription}>Placeholder description.</p>
              </div>
              <div className={styles.communityGrid}>
                <article className={styles.communityCard}>
                  <h3 className={styles.cardTitle}>Placeholder heading</h3>
                  <p className={styles.cardText}>Placeholder description.</p>
                </article>
                <article className={styles.communityCard}>
                  <h3 className={styles.cardTitle}>Placeholder heading</h3>
                  <p className={styles.cardText}>Placeholder description.</p>
                </article>
              </div>
            </section>

            <div className={styles.ctaRow}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                View Open Source Contributions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}