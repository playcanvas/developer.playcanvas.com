import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import data from './tutorial-data.json';
import styles from './tutorials.module.css';

export default function Tutorials() {
  // State for storing active tags
  const [activeTags, setActiveTags] = useState([]);
  // State for storing filtered tutorials
  const [filteredTutorials, setFilteredTutorials] = useState(data.result);

  // Collect all unique tags from the tutorial data
  const allTags = Array.from(new Set(data.result.flatMap(tutorial => tutorial.tags || [])));

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
      setFilteredTutorials(data.result);
    } else {
      const filtered = data.result.filter(tutorial =>
        tutorial.tags.some(tag => activeTags.includes(tag))
      );
      setFilteredTutorials(filtered);
    }
  }, [activeTags]);

  return (
    <Layout title="Tutorials" description="PlayCanvas Tutorials">
      {/* Tag filter buttons */}
      <div className={styles.tagContainer}>
        {allTags.sort().map((tag, index) => (
          <button
            key={index}
            className={`${styles.tagButton} ${activeTags.includes(tag) ? styles.activeTag : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className={styles.tutorialsGrid}>
        {filteredTutorials.map((tutorial, i) => (
          <div className={styles.tutorialTile} key={i}>
            <img src={tutorial.thumbnails.s} alt={tutorial.name} className={styles.thumbnail} />
            <div className={styles.title}>{tutorial.name}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
