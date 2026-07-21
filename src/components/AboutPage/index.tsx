import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const workflow = [
  {
    title: 'Research',
    description: 'Understand the technology, official documentation, and common deployment patterns before writing.',
  },
  {
    title: 'Deploy',
    description: 'Deploy the application or infrastructure in a real environment using production-oriented configurations.',
  },
  {
    title: 'Validate',
    description: 'Verify commands, configurations, and expected outcomes through repeated testing.',
  },
  {
    title: 'Document',
    description: 'Transform implementation experience into clear, structured, step-by-step documentation.',
  },
  {
    title: 'Maintain',
    description: 'Review and update guides as software releases, best practices, and tooling evolve.',
  },
];

const principles = [
  {
    title: 'Hands-on First',
    description: 'Every tutorial is based on a real deployment rather than theoretical examples or copied documentation.',
  },
  {
    title: 'Clarity Over Complexity',
    description: 'Complex topics are broken into clear, logical steps that are easy to follow without sacrificing technical accuracy.',
  },
  {
    title: 'Reproducibility',
    description: 'Readers should be able to reproduce every deployment and workflow by following the documented steps.',
  },
];

const focusAreas = [
  'Self-hosted open-source applications',
  'Kubernetes deployments',
  'Observability and monitoring',
  'AI-powered workflow automation',
  'Production-ready infrastructure guides',
];

export default function AboutPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`About | ${siteConfig.title}`}
      description="About Abdul Talha, a DevOps Technical Writer creating production-ready documentation.">
      <main className={styles.page}>
        <section className={clsx(styles.section, styles.hero)} aria-labelledby="about-title">
          <div className="container">
            <div className={styles.heroInner}>
              <p className={styles.eyebrow}>ABOUT</p>
              <Heading as="h1" id="about-title" className={styles.title}>
                About
              </Heading>
              <p className={styles.description}>
                I'm Abdul Talha, a DevOps Technical Writer focused on creating production-ready documentation for developers, DevOps engineers, self-hosting enthusiasts, and system administrators.
              </p>
              <p className={styles.description}>
                This documentation library brings together deployment guides, Kubernetes tutorials, observability workflows, and practical automation examples based on real-world implementations. Every guide is built through hands-on experimentation and validated before publication, with the goal of helping readers confidently deploy and operate modern infrastructure.
              </p>
              <p className={styles.description}>
                Whether a guide is published here or through developer platforms such as Vultr or freeCodeCamp, the focus remains the same: clear, accurate, and reproducible technical documentation.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="mission-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="mission-title" className={styles.sectionTitle}>
                Mission
              </Heading>
              <p className={styles.sectionDescription}>
                My mission is to simplify complex infrastructure and DevOps topics through practical, production-focused documentation.
              </p>
            </div>
            <div className={clsx(styles.surface, styles.missionBody)}>
              <p className={styles.cardText}>
                Rather than explaining concepts in isolation, I document complete workflows—from initial deployment and configuration to monitoring, troubleshooting, and long-term maintenance. The objective is to provide documentation that developers can apply directly in their own environments with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="workflow-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="workflow-title" className={styles.sectionTitle}>
                Documentation Workflow
              </Heading>
              <p className={styles.sectionDescription}>
                Every guide published in this documentation library follows a consistent documentation workflow.
              </p>
            </div>
            <div className={clsx(styles.timeline, styles.timelineSpaced)}>
              {workflow.map((step, index) => (
                <article key={step.title} className={styles.timelineCard}>
                  <span className={styles.timelineIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardText}>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="principles-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="principles-title" className={styles.sectionTitle}>
                Documentation Principles
              </Heading>
              <p className={styles.sectionDescription}>
                The documentation published here is guided by a simple set of principles.
              </p>
            </div>
            <div className={clsx(styles.grid, styles.gridSpaced)}>
              {principles.map((principle) => (
                <article key={principle.title} className={styles.featureCard}>
                  <h3 className={styles.cardTitle}>{principle.title}</h3>
                  <p className={styles.cardText}>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="focus-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="focus-title" className={styles.sectionTitle}>
                Current Focus
              </Heading>
              <p className={styles.sectionDescription}>
                This documentation library is currently focused on practical DevOps and cloud-native technologies, including:
              </p>
            </div>
            <div className={clsx(styles.surface, styles.missionBody)}>
              <ul className={styles.focusList}>
                {focusAreas.map((area) => (
                  <li key={area} className={styles.cardText}>{area}</li>
                ))}
              </ul>
            </div>
            <p className={clsx(styles.sectionDescription, styles.focusNote)}>
              New documentation is published regularly as new technologies are explored and existing guides are expanded.
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="connect-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="connect-title" className={styles.sectionTitle}>
                Let's Connect
              </Heading>
              <p className={styles.sectionDescription}>
                If you'd like to discuss technical writing, developer documentation, open-source software, or DevOps technologies, feel free to connect.
              </p>
              <p className={styles.sectionDescription}>
                You can find my published work, documentation, and open-source contributions through the links available throughout this site.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}