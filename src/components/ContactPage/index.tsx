import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const contactCards = [
  {
    label: 'Email',
    value: 'abdultalha3226@gmail.com',
    description:
      'For technical writing opportunities, documentation projects, collaboration proposals, or general inquiries.',
    linkLabel: 'Send an Email',
    to: 'mailto:abdultalha3226@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdul-talha',
    description:
      'Connect with me for professional networking, technical writing, and DevOps discussions.',
    linkLabel: 'View LinkedIn',
    to: 'https://linkedin.com/in/abdul-talha',
  },
  {
    label: 'GitHub',
    value: 'github.com/abdultalha',
    description:
      'Explore my open-source contributions, documentation source, and personal projects.',
    linkLabel: 'View GitHub',
    to: 'https://github.com/abdultalha',
  },
];

const faqs = [
  {
    question: 'What topics do you write about?',
    answer:
      'I specialize in DevOps, Kubernetes, self-hosted open-source software, observability, cloud infrastructure, and workflow automation.',
  },
  {
    question: 'Where can I find your published articles?',
    answer:
      'My published work is available on platforms such as Vultr Docs and freeCodeCamp, in addition to the documentation hosted on this website.',
  },
  {
    question: 'Do you contribute to open source?',
    answer:
      'Yes. I actively contribute to open-source projects and create hands-on documentation based on real deployments and practical experience.',
  },
];

export default function ContactPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Contact | ${siteConfig.title}`}
      description="Get in touch with Abdul Talha for technical writing, documentation projects, and DevOps collaborations.">
      <main className={styles.page}>
        <section className={clsx(styles.section, styles.hero)} aria-labelledby="contact-title">
          <div className="container">
            <div className={styles.heroInner}>
              <p className={styles.eyebrow}>CONTACT</p>
              <Heading as="h1" id="contact-title" className={styles.title}>
                Get in Touch
              </Heading>
              <p className={styles.description}>
                Thank you for visiting my documentation library.
              </p>
              <p className={styles.description}>
                If you have questions about a guide, would like to discuss technical writing, explore collaboration opportunities, or provide feedback on the documentation, I'd be happy to hear from you.
              </p>
              <p className={styles.description}>
                The best way to reach me is through email or LinkedIn.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="contact-cards-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="contact-cards-title" className={styles.sectionTitle}>
                Connect
              </Heading>
            </div>

            <div className={clsx(styles.grid, styles.gridSpaced)}>
              {contactCards.map((card) => (
                <article key={card.label} className={styles.card}>
                  <div className={styles.cardBody}>
                    <p className={styles.cardLabel}>{card.label}</p>
                    <p className={styles.cardText}>{card.value}</p>
                    <p className={styles.cardText}>{card.description}</p>
                    <Link className={styles.cardLink} to={card.to}>
                      → {card.linkLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="availability-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="availability-title" className={styles.sectionTitle}>
                Availability
              </Heading>
            </div>

            <div className={clsx(styles.surface, styles.gridSpaced)}>
              <p className={styles.cardText}>
                I'm always open to connecting with fellow developers, technical writers, and engineering teams. Whether you'd like to discuss documentation, provide feedback, collaborate on open-source projects, or explore professional opportunities, feel free to get in touch. I typically respond to emails within 1–2 business days.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="faq-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="faq-title" className={styles.sectionTitle}>
                Frequently Asked Questions
              </Heading>
            </div>

            <div className={clsx(styles.faqGrid, styles.gridSpaced)}>
              {faqs.map((faq) => (
                <article key={faq.question} className={styles.card}>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{faq.question}</h3>
                    <p className={styles.cardText}>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}