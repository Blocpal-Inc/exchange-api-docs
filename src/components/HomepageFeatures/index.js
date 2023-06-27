import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('@site/static/img/secure_1.svg').default,
    description: (
      <>
        All of our crypto infrastructure is managed by us on bare-metal servers, with no third-party or cloud exposure. Robust system of hot, warm, and cold multi-sig wallets for storing user funds.      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('@site/static/img/transparency_1.svg').default,
    description: (
      <>
        We are a centralized exchange almost as transparent as a decentralized one. We don't ask for your trust but allow you to verify our reserves and liabilities yourself.      </>
    ),
  },
  {
    title: 'Binance & Nomics style API',
    Svg: require('@site/static/img/binananceAPI_1.svg').default,
    description: (
      <>
        No need to wrap your brain around a new API platform. Your current trading software will probably work just fine with us.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div style={{maxWidth:"310px"}} className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 style={{fontSize:"20px",fontWeight:"bold"}}>{title}</h3>
        <p style={{fontSize:"16px"}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{justifyContent:"space-around"}} className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
