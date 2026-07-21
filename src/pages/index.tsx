import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import CTA from '../components/CTA';
import FeaturedDocs from '../components/FeaturedDocs';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import OpenSource from '../components/OpenSource';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Documentation-first portfolio homepage with reusable React sections">
      <main className={styles.page}>
        <Hero />
        <Mission />
        <FeaturedDocs />
        <OpenSource />
        <CTA />
      </main>
    </Layout>
  );
}
