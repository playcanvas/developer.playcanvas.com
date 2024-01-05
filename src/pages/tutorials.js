import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import data from './tutorial-data.json';
import styles from './tutorials.module.scss';
import allRoutes from '@generated/routes'
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

// From all the available routes, find the one that matches the path of the tutorials page
// const tutorials = routes
//   .find(r => r.path === '/' && Array.isArray(r.routes)).routes[0].routes
//   .find(r => Array.isArray(r.routes)).routes
//   .filter(r => r.path.startsWith('/tutorials/'))

const Cross = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>)


const Chip = props => {
  const { children, isActive, ...rest } = props;
  const stateStyle = !isActive ? '' : `${styles.activeTag}`;

  return <button {...rest} className={`${styles.tagButton} ${stateStyle}`}>
    {children}
    { isActive && <div className={styles.tagIcon}>
      <Cross/>
    </div> }
  </button>
};

export default function Tutorials() {

  const { tags, tutorials } = data

  // State for storing active tags
  const [activeTags, setActiveTags] = useState([]);
  // State for storing filtered tutorials
  const [filteredTutorials, setFilteredTutorials] = useState(tutorials);

  // Collect all unique tags from the tutorial data
  // const allTags = Array.from(new Set(data.result.flatMap(tutorial => tutorial.tags || [])));

  // Handle tag button click
  const toggleTag = (tag) => {
    setActiveTags(prevActiveTags =>
      prevActiveTags.includes(tag)
        ? prevActiveTags.filter(t => t !== tag)
        : [...prevActiveTags, tag]
    );
  };

  // Filter tutorials based on active tags
  useEffect(() => {
    if (activeTags.length === 0) {
      setFilteredTutorials(tutorials);
    } else {
      const filtered = tutorials.filter(tutorial =>
        tutorial.tags.some(tag => activeTags.includes(tag))
      );
      setFilteredTutorials(filtered);
    }
  }, [activeTags]);

  return (
    <Layout title="Tutorials" description="PlayCanvas Tutorials">
      {/* Tag filter buttons */}
      <div className={styles.tagContainer}>
        {tags.sort().map((tag, index) => (
          <Chip key={index} onClick={() => toggleTag(tag)} isActive={activeTags.includes(tag)}>
            {tag}
          </Chip>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className={styles.tutorialsGrid}>
        {filteredTutorials.map((tutorial, i) => (
          <Link href={tutorial.filename} target='_blank' rel='noreferrer noopener' className={styles.tutorialTile} key={i}>
            <div className={styles.tutorialTile}>
              <img src={tutorial.thumb} alt={tutorial.title} className={`${styles.thumbnail} shadow`} />
              <div className={styles.title}>{tutorial.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
