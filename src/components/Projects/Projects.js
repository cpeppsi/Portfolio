import React from 'react';
import styles from './Projects.module.css';
import ProjectDisplay from './ProjectDisplay';

const projects = [
  {
    title: 'Silly Brief',
    description: 'A creative warmup and tool site for graphic designers.',
    image: 'https://via.placeholder.com/300',
    demoLink: 'https://demo-link.com',
    repoLink: 'https://github.com/your-repo/project-one',
  },
  {
    title: 'Slappy Penguin',
    description: 'Describe Slappy penguin.',
    image: 'https://via.placeholder.com/300',
    demoLink: 'https://demo-link.com',
    repoLink: 'https://github.com/your-repo/project-two',
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectDisplay key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
