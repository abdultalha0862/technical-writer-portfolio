import clsx from 'clsx';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const features = [
  {
    title: 'Hands-on Validation',
    description: 'Every guide is tested through a real deployment before it\'s published.',
  },
  {
    title: 'Production-first Guides',
    description: 'Documentation goes beyond installation to cover security, upgrades, monitoring, backups, and maintenance.',
  },
  {
    title: 'Real-world Troubleshooting',
    description: 'Every guide includes common issues, debugging steps, and validation checks to reduce deployment time.',
  },
];

const workflow = ['Research', 'Deploy', 'Debug', 'Validate', 'Document'];

export default function Mission(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="mission-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={shared.sectionHeader}>
              <p className={shared.eyebrow}>MISSION</p>
              <Heading as="h2" id="mission-title" className={shared.sectionTitle}>
                Helping developers deploy self-hosted software with confidence.
              </Heading>
              <p className={shared.description}>
                Modern open-source software is powerful, but many deployment guides stop at "it works." I create documentation based on real deployments, validation, and troubleshooting so developers can deploy with confidence.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <article key={feature.title} className={clsx(shared.card, styles.featureCard)}>
                  <div className={clsx(shared.cardBody, styles.featureBody)}>
                    <div className={styles.featureHeader}>
                      <span className={styles.iconPlaceholder} aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={shared.cardTitle}>{feature.title}</h3>
                    </div>
                    <p className={shared.cardText}>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className={clsx(shared.surface, styles.workflowPanel)} aria-label="Documentation creation workflow">
            <div className={shared.surfaceInner}>
              <div className={shared.sectionHeader}>
                <p className={shared.eyebrow}>Workflow</p>
                <Heading as="h3" className={styles.workflowTitle}>
                  How Every Guide Is Created
                </Heading>
                <p className={shared.description}>Every guide follows the same hands-on process — from studying official docs to publishing validated content.</p>
              </div>

              <div className={styles.workflowTrack}>
                {workflow.map((step, index) => (
                  <div key={step} className={styles.workflowItem}>
                    <div className={styles.workflowCard}>
                      <span className={styles.workflowIndex}>{String(index + 1).padStart(2, '0')}</span>
                      <span className={styles.workflowLabel}>{step}</span>
                    </div>
                    {index < workflow.length - 1 ? <span className={styles.workflowConnector} aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}