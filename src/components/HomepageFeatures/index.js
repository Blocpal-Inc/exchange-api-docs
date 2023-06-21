import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('@site/static/img/60c2b1efb4f8975a86e85b43_Asset_26.svg').default,
    description: (
      <>
        All of our crypto infrastructure is managed by us on bare-metal servers, with no third-party or cloud exposure. Robust system of hot, warm, and cold multi-sig wallets for storing user funds.      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('@site/static/img/60c2b1efb4f897158de85b38_Asset_16.svg').default,
    description: (
      <>
        We are a centralized exchange almost as transparent as a decentralized one. We don't ask for your trust but allow you to verify our reserves and liabilities yourself.      </>
    ),
  },
  {
    title: 'Binance and Nomics style API',
    Svg: require('@site/static/img/60c2c4ef1ae96f1d13b45585_Asset_23.svg').default,
    description: (
      <>
        No need to wrap your brain around a new API platform. Your current trading software will probably work just fine with us.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
