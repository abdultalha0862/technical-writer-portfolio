import clsx from 'clsx';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const audiences = [
  {
    title: 'Software Developers',
    description: 'Placeholder description.',
    tag: 'Application Development',
  },
  {
    title: 'DevOps Engineers',
    description: 'Placeholder description.',
    tag: 'Infrastructure',
  },
  {
    title: 'Platform Engineers',
    description: 'Placeholder description.',
    tag: 'Internal Platforms',
  },
  {
    title: 'System Administrators',
    description: 'Placeholder description.',
    tag: 'Operations',
  },
  {
    title: 'Self-hosting Enthusiasts',
    description: 'Placeholder description.',
    tag: 'Self-hosted',
  },
  {
    title: 'Engineering Managers',
    description: 'Placeholder description.',
    tag: 'Leadership',
  },
];

export default function Audience(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="audience-title">
      <div className="container">
        <div className={clsx(shared.sectionHeader, styles.header)}>
          <p className={shared.eyebrow}>AUDIENCE</p>
          <Heading as="h2" id="audience-title" className={shared.sectionTitle}>
            Built for modern engineering teams.
          </Heading>
          <p className={shared.description}>Placeholder description</p>
        </div>

        <div className={styles.grid} role="list" aria-label="Audience groups">
          {audiences.map((audience) => (
            <article key={audience.title} className={clsx(shared.card, styles.card)} role="listitem">
              <div className={shared.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.iconPlaceholder} aria-hidden="true" />
                  <h3 className={shared.cardTitle}>{audience.title}</h3>
                </div>

                <p className={shared.cardText}>{audience.description}</p>

                <span className={styles.tag}>{audience.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}