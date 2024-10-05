import React from 'react';
import styles from './About.module.css';
import profilePic from '../../assets/profile.jpg'; // Add your profile picture in src/assets/

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <img src={profilePic} alt="Casey Epps" className={styles.profilePic} />
        <div className={styles.text}>
          <h2>About Me</h2>
          <p>
            Hello world! I'm Casey Epps, a passionate Software Developer with experience in building web applications using modern technologies like React, JavaScript, and CSS. I enjoy creating efficient and scalable solutions, and I'm always eager to learn and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
