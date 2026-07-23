import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const trustIndicators = ['Hands-on Deployments', 'Production-tested Guides', 'Open Source Contributor'];

const metrics = [
  { value: '10+', label: 'Production Guides' },
  { value: '3+', label: 'Open Source Projects' },
  { value: '3', label: 'Developer Publications' },
];
const sidebarItems = [
  'Overview',
  'Installation',
  'Configuration',
  'Deployment',
  'Validation',
  'Troubleshooting',
];

const steps = ['Prerequisites', 'Install Dependencies', 'Configure Environment', 'Deploy Services', 'Verify Deployment', 'Troubleshoot', 'Upgrade', 'Backup'];

function VultrLogo(): JSX.Element {
  return (
    <svg className={styles.pubLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.36 2.172A1.194 1.194 0 007.348 1.6H1.2A1.2 1.2 0 000 2.8a1.211 1.211 0 00.182.64l11.6 18.4a1.206 1.206 0 002.035 0l3.075-4.874a1.229 1.229 0 00.182-.64 1.211 1.211 0 00-.182-.642zm10.349 8.68a1.206 1.206 0 002.035 0L21.8 9.178l2.017-3.2a1.211 1.211 0 00.183-.64 1.229 1.229 0 00-.183-.64l-1.6-2.526a1.206 1.206 0 00-1.016-.571h-6.148a1.2 1.2 0 00-1.201 1.2 1.143 1.143 0 00.188.64z" />
    </svg>
  );
}

function FreeCodeCampLogo(): JSX.Element {
  return (
    <svg className={styles.pubLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z" />
    </svg>
  );
}

function CivoLogo(): JSX.Element {
  return (
    <svg className={styles.pubLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.229 7.985h-.993c-.183 0-.303.14-.303.318v7.393c0 .177.12.318.303.318h.993a.318.318 0 0 0 .323-.318V8.303a.317.317 0 0 0-.323-.318m-3.1 5.838a.32.32 0 0 0-.507-.104 2.34 2.34 0 0 1-1.604.635c-1.627 0-2.868-1.65-2.141-3.368a2.128 2.128 0 0 1 1.13-1.128c.992-.42 1.958-.18 2.599.408a.32.32 0 0 0 .507-.103l.43-.943a.353.353 0 0 0-.111-.428C5.425 8.03 4.05 7.732 2.617 8.22a3.838 3.838 0 0 0-2.412 2.478c-.874 2.772 1.172 5.32 3.813 5.32.92 0 1.764-.31 2.44-.831a.348.348 0 0 0 .101-.42zm17.666-3.125a3.838 3.838 0 0 0-2.412-2.478 4.176 4.176 0 0 0-2.329-.13c-1.2.269-2.07.838-2.834 2.479l-1.534 3.326-2.603-5.722a.32.32 0 0 0-.29-.187l-1.138-.002a.32.32 0 0 0-.292.453l3.376 7.382a.324.324 0 0 0 .291.19l.056.005h1.276a.236.236 0 0 0 .076-.013.335.335 0 0 0 .2-.18l1.71-3.893c.515-1.213.827-1.718 1.643-2.065a2.527 2.527 0 0 1 2.054.026c.492.222.878.629 1.084 1.128a2.701 2.701 0 0 1 .206.95 2.354 2.354 0 0 1-2.353 2.387 2.34 2.34 0 0 1-1.604-.635.32.32 0 0 0-.507.104l-.43.944a.348.348 0 0 0 .1.42c.677.52 1.522.831 2.44.831 2.642 0 4.688-2.548 3.814-5.32" />
    </svg>
  );
}

export default function Hero(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="homepage-hero-title">
      <div className={clsx('container', shared.sectionInner, styles.heroGrid)}>
        <div className={styles.contentColumn}>
          <p className={shared.eyebrow}>DEVOPS TECHNICAL WRITER</p>
          <Heading as="h1" id="homepage-hero-title" className={clsx(shared.title, styles.titleSpacing)}>
            <span className={styles.titleLine}>Abdul</span>
            <span className={styles.titleLineAccent}>Talha</span>
          </Heading>
          <p className={clsx(styles.lead, styles.leadSpacing)}>
            I help developers deploy, operate, and maintain self-hosted open-source software through production-ready documentation.
          </p>

          <div className={clsx(styles.actions, styles.actionsSpacing)}>
            <Link className={clsx('button button--primary button--lg', styles.primaryButton)} to="/docs" aria-label="View documentation">
              View Documentation
            </Link>
          </div>

          <ul className={clsx(styles.trustList, styles.trustSpacing)} aria-label="Trust indicators">
            {trustIndicators.map((indicator) => (
              <li key={indicator} className={styles.trustItem}>
                <span className={styles.trustDot} aria-hidden="true" />
                <span>{indicator}</span>
              </li>
            ))}
          </ul>

          <p className={clsx(styles.publishedLine, styles.publishedSpacing)}>
            <span className={styles.publishedLabel}>Published on</span>
            <a
              className={styles.pubItem}
              href="https://docs.vultr.com/author/abdul-talha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VultrLogo />Vultr
            </a>
            <a
              className={styles.pubItem}
              href="https://www.freecodecamp.org/news/author/abdultalha3226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FreeCodeCampLogo />freeCodeCamp
            </a>
            <a
              className={styles.pubItem}
              href="https://www.civo.com/authors/abdul-talha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CivoLogo />Civo
            </a>
          </p>

          <div className={clsx(styles.metricsRow, styles.metricsSpacing)} aria-label="Key metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={clsx(shared.surface, styles.visual)} aria-hidden="true">
          <div className={shared.surfaceInner}>
            <div className={styles.visualShell}>
              <aside className={styles.visualSidebar}>
                <div className={styles.sidebarHeader}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>

                <div className={styles.sidebarBody}>
                  {sidebarItems.map((item) => (
                    <div key={item} className={styles.sidebarItem}>
                      <span className={styles.sidebarBullet} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <section className={styles.visualMain}>
                <div className={styles.windowHeader}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <div className={styles.windowTitle}>Publishing Guide</div>
                </div>

                <div className={styles.documentCard}>
                  <div className={styles.documentHeader}>
                    <span className={shared.meta}>Section Overview</span>
                    <span className={styles.statusPill}>Ready</span>
                  </div>

                  <div className={styles.documentBody}>
                    {steps.map((step, index) => (
                      <div key={step} className={styles.documentRow}>
                        <div className={styles.stepIndex}>{String(index + 1).padStart(2, '0')}</div>
                        <div className={styles.stepContent}>
                          <span className={styles.stepLabel}>{step}</span>
                          <span className={styles.stepLine} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.footerGrid}>
                  <article className={clsx(shared.card, styles.floatingCard)}>
                    <div className={clsx(shared.cardBody, styles.floatingBody)}>
                      <p className={shared.meta}>Production Ready</p>
                      <p className={clsx(shared.cardText, styles.floatingText)}>Validated Deployments</p>
                    </div>
                  </article>

                  <article className={clsx(shared.card, styles.floatingCard, styles.altCard)}>
                    <div className={clsx(shared.cardBody, styles.floatingBody)}>
                      <p className={shared.meta}>Security First</p>
                      <p className={clsx(shared.cardText, styles.floatingText)}>TLS • HTTPS • Hardening</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}