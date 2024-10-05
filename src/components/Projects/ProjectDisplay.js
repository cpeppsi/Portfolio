import React from 'react';
import styles from './ProjectDisplay.module.css';

const ProjectDisplay = ({ project }) => {
  const { title, description, image, demoLink, repoLink } = project;
  
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Live Demo
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
