import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import UserManualImage from '@site/static/img/playcanvas-user-manual.png';
import TutorialsImage from '@site/static/img/playcanvas-tutorials.png';
import ApiReferenceImage from '@site/static/img/playcanvas-api-reference.png';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'User Manual',
    Image: UserManualImage,
    Url: './user-manual',
    description: (
      <>
        Learn about every aspect of PlayCanvas, from the basics to advanced.
      </>
    ),
  },
  {
    title: 'Tutorials',
    Image: TutorialsImage,
    Url: './tutorials',
    description: (
      <>
        Real world applications of PlayCanvas that make learning both fun and
        easy.
      </>
    ),
  },
  {
    title: 'API Reference',
    Image: ApiReferenceImage,
    description: (
      <>
        Get to know the PlayCanvas API and how to use it to build your own
        interactive web apps.
      </>
    ),
  },
];

function Feature({Image, title, description, Url}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={Url}>
        <div className="text--center">
          <img src={Image} alt={title} className={styles.featureImg} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
