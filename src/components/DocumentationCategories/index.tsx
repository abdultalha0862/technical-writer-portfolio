import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const categories = [
  {
    title: 'Applications',
    description: 'Placeholder description.',
    count: '12 Guides',
  },
  {
    title: 'Docker',
    description: 'Placeholder description.',
    count: '15 Guides',
  },
  {
    title: 'Kubernetes',
    description: 'Placeholder description.',
    count: '18 Guides',
  },
  {
    title: 'Infrastructure',
    description: 'Placeholder description.',
    count: '10 Guides',
  },
  {
    title: 'Security',
    description: 'Placeholder description.',
    count: '8 Guides',
  },
  {
    title: 'Operations',
    description: 'Placeholder description.',
    count: '14 Guides',
  },
];

export default function DocumentationCategories(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="categories-title">
      <div className="container">
        <div className={clsx(shared.sectionHeader, styles.header)}>
          <p className={shared.eyebrow}>DOCUMENTATION CATEGORIES</p>
          <Heading as="h2" id="categories-title" className={shared.sectionTitle}>
            Explore documentation by topic.
          </Heading>
          <p className={shared.description}>Placeholder description</p>
        </div>

        <div className={styles.grid} role="list" aria-label="Documentation categories">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/docs/intro"
              className={styles.cardLink}
              aria-label={`${category.title} documentation category`}
              role="listitem">
              <article className={styles.card}>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.iconPlaceholder} aria-hidden="true" />
                    <span className={styles.arrow} aria-hidden="true" />
                  </div>

                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.count}>{category.count}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link className={styles.footerLink} to="/docs/intro">
            Browse Complete Documentation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}