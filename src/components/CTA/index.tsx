import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

export default function CTA(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.inner}>
          <Heading as="h2" id="cta-title" className={styles.title}>
            Let&apos;s build better documentation.
          </Heading>
          <p className={styles.description}>
            Looking for a technical writer to create deployment guides, Kubernetes documentation, or self-hosted product documentation? I&apos;d love to collaborate.
          </p>

          <div className={styles.buttonRow}>
            <Link className={clsx('button button--primary button--lg', styles.ctaButton)} to="/contact">
              Get in Touch
            </Link>
            <Link className={clsx('button button--primary button--lg', styles.ctaButton)} href="http://linkedin.com/in/abdul-talha/">
              LinkedIn
            </Link>
          </div>

          <p className={styles.trustSignal}>
            Every guide is deployed, tested, and validated before publication.
          </p>

          <p className={styles.techLine}>
            Built with Docusaurus • GitHub Pages • Git-based Documentation Workflow
          </p>
        </div>
      </div>
    </section>
  );
}