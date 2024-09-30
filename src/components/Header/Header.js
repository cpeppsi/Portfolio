import React from "react";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Casey Epps</h1>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;