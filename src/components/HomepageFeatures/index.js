import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '이민 절차',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        에이전시 선택, 서류 접수, NCLEX-RN, Visa Screen, Endorsement
      </>
    ),
  },
  {
    title: '생활 적응',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        소셜번호, 은행, 자동차, 신용점수, 주거, 세금, 쇼핑
      </>
    ),
  },
  {
    title: '커리어',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        병동, 특수부서, NP, 스쿨널스, 널싱홈, 영어공부
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
