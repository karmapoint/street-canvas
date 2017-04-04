import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li className={styles.bottomNav}> <Link to="/" >MAP</Link></li>
        <li className={styles.bottomNav}><Link to="/" >GALLERY</Link></li>
        <li className={styles.addButton}><Link to="/" >+</Link></li>
      </ul>
    </div>
  );
}

export default Footer;
