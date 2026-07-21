import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const projects = [
  {
    name: 'Ghost',
    title: 'Frontend',
    description: 'Contributed frontend fixes to the Ghost publishing platform.',
    contributionTypes: ['Frontend'],
    tags: ['JavaScript', 'Node.js'],
    status: '3 PRs merged',
    href: 'https://github.com/TryGhost/Ghost/pulls?q=is%3Apr+author%3Aabdultalha0862+is%3Aclosed',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHoITWED4h0pAAwqpDKdbcz1cgekKujoRTLqfTNsNsg&s',
  },
  {
    name: 'Mautic',
    title: 'Translation',
    description: 'Contributed a Hindi-to-English translation to the Mautic open-source marketing automation platform.',
    contributionTypes: ['Translation'],
    tags: ['PHP'],
    status: '1 PR merged',
    href: 'https://github.com/mautic/low-no-code/pulls?q=is%3Apr+is%3Aclosed+author%3Aabdultalha0862',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBd9tiy5_wdf9cWofsa1o0m32v4coo4_7ZhFYQcDHgQ&s=10',
  },
  {
    name: 'Codecademy Docs',
    title: 'Documentation',
    description: 'Contributed documentation to the Codecademy open-source documentation project.',
    contributionTypes: ['Documentation'],
    tags: ['Markdown'],
    status: 'Repository archived',
    href: 'https://github.com/abdultalha0862/docs',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqv_mESVb1EGtX6jpvZGa-mCio45KjI9ha63rlFgs7Ug&s=10',
  },
];

const stats = [
  {label: 'Projects Contributed', value: '3'},
  {label: 'Pull Requests Merged', value: '4'},
  {label: 'Issues Contributed', value: '6+'},
];

export default function OpenSource(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="opensource-title">
      <div className="container">
        <div className={clsx(shared.sectionHeader, styles.header)}>
          <p className={shared.eyebrow}>OPEN SOURCE</p>
          <Heading as="h2" id="opensource-title" className={shared.sectionTitle}>
            Open Source Contributions
          </Heading>
          <p className={shared.description}>Real contributions to real projects — documentation, bug fixes, and frontend improvements.</p>
        </div>

        <div className={styles.grid} role="list" aria-label="Open source projects">
          {projects.map((project, index) => (
            <Link
              key={`${project.title}-${index}`}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`${project.name} open source contribution card`}
              role="listitem">
              <article className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <div className={styles.logoPlaceholder} aria-hidden="true">
                      {project.logo ? (
                        <img className={styles.logo} src={project.logo} alt="" loading="lazy" />
                      ) : (
                        <span className={styles.logoMark}>{project.name.substring(0, 2).toUpperCase()}</span>
                      )}
                    </div>

                    <span className={clsx(styles.statusBadge, project.status === 'Repository archived' && styles.statusArchived)}>
                      {project.status}
                    </span>
                  </div>

                  <div className={styles.projectContent}>
                    <p className={styles.projectName}>{project.name}</p>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardText}>{project.description}</p>
                  </div>

                  <div className={styles.badgeGroup} aria-label="Contribution type">
                    {project.contributionTypes.map((type) => (
                      <span key={type} className={styles.badge}>
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className={styles.tagGroup} aria-label="Technology tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className={styles.statsSection} aria-label="Open source statistics">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}