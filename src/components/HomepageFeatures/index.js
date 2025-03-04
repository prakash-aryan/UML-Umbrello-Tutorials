import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use Case Diagrams',
    Svg: require('@site/static/img/use-case-diagram.svg').default,
    description: (
      <>
        Learn how to create and manage use case diagrams to model system requirements and user interactions.
      </>
    ),
    link: '/docs/use-case'
  },
  {
    title: 'Activity Diagrams',
    Svg: require('@site/static/img/activity-diagram.svg').default,
    description: (
      <>
        Create diagrams to model workflows and business processes with step-by-step guidance.
      </>
    ),
    link: '/docs/activity-diagram'
  },
  {
    title: 'Class Diagrams',
    Svg: require('@site/static/img/class-diagram.svg').default,
    description: (
      <>
        Design object-oriented systems and database schemas with comprehensive class diagram tutorials.
      </>
    ),
    link: '/docs/class-diagram'
  },
  {
    title: 'State Diagrams',
    Svg: require('@site/static/img/state-diagram.svg').default,
    description: (
      <>
        Model object lifecycle and system behavior with intuitive state transition diagrams.
      </>
    ),
    link: '/docs/state-diagram'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={clsx('text--center padding-horiz--md', styles.featureContent)}>
          <h3>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--md"
              to={link}>
              View Tutorial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}