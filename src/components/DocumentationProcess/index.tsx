import clsx from 'clsx';
import Heading from '@theme/Heading';

import shared from '../homepage.module.css';
import styles from './styles.module.css';

const steps = [
  {step: '01', title: 'Understand', description: 'Placeholder description.'},
  {step: '02', title: 'Deploy', description: 'Placeholder description.'},
  {step: '03', title: 'Debug', description: 'Placeholder description.'},
  {step: '04', title: 'Validate', description: 'Placeholder description.'},
  {step: '05', title: 'Document', description: 'Placeholder description.'},
];

export default function DocumentationProcess(): JSX.Element {
  return (
    <section className={clsx(shared.section, styles.section)} aria-labelledby="process-title">
      <div className="container">
        <div className={clsx(shared.sectionHeader, styles.header)}>
          <p className={shared.eyebrow}>DOCUMENTATION PROCESS</p>
          <Heading as="h2" id="process-title" className={shared.sectionTitle}>
            A structured workflow for production-ready documentation.
          </Heading>
          <p className={shared.description}>Placeholder description</p>
        </div>

        <div className={styles.timeline} role="list" aria-label="Documentation workflow">
          {steps.map((step, index) => (
            <div key={step.step} className={styles.timelineItemWrap} role="listitem">
              <article className={clsx(shared.card, styles.card)}>
                <div className={shared.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.stepNumber}>{step.step}</span>
                    <span className={styles.cardIndex}>Step {step.step}</span>
                  </div>
                  <h3 className={shared.cardTitle}>{step.title}</h3>
                  <p className={shared.cardText}>{step.description}</p>
                </div>
              </article>

              {index < steps.length - 1 ? <span className={styles.connector} aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}