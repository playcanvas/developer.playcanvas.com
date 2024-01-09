import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import UserManualImage from '@site/static/img/playcanvas-user-manual.png';
import TutorialsImage from '@site/static/img/playcanvas-tutorials.png';
import ApiReferenceImage from '@site/static/img/playcanvas-api-reference.png';

const FeatureList = [
  {
    title: 'User Manual',
    Image: UserManualImage,
    description: (
      <>
        Learn about every aspect of PlayCanvas, from the basics to advanced.
      </>
    ),
  },
  {
    title: 'Tutorials',
    Image: TutorialsImage,
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

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
