import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';

import styles from './styles.module.css';

// Update the affiliate/referral link once here and it changes everywhere.
const DEFAULT_AFFILIATE_LINK = 'https://www.digitalocean.com/';

export interface InfrastructureUsedProps {
  provider?: string;
  os?: string;
  environment?: string;
  affiliateLink?: string;
}

export default function InfrastructureUsed({
  provider = 'DigitalOcean',
  os = 'Ubuntu 24.04 LTS',
  environment = 'Virtual Machine (Droplet)',
  affiliateLink = DEFAULT_AFFILIATE_LINK,
}: InfrastructureUsedProps): JSX.Element {
  return (
    <section className={styles.infra} aria-labelledby="infrastructure-used-title">
      <Heading as="h2" id="infrastructure-used-title">
        Infrastructure Used
      </Heading>

      <p className={styles.intro}>
        This guide was validated using the following infrastructure:
      </p>

      <ul className={styles.list}>
        <li>
          <strong>Cloud Provider:</strong> {provider}
        </li>
        <li>
          <strong>Operating System:</strong> {os}
        </li>
        <li>
          <strong>Deployment Environment:</strong> {environment}
        </li>
      </ul>

      <Admonition type="info" title="Disclosure">
        <p>
          This guide contains affiliate links. If you sign up through these
          links, I may earn a commission at no additional cost to you. I only
          recommend products and services that I personally use while testing my
          guides.
        </p>
      </Admonition>

      <div className={styles.buttonRow}>
        <Link
          className={clsx('button button--primary', styles.affiliateButton)}
          href={affiliateLink}
        >
          Create a {provider} {environment.includes('Droplet') ? 'Droplet' : 'Server'}
        </Link>
      </div>
    </section>
  );
}
