import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './NavBar.css';

export default function NavBar() {
  return (
    <div className={styles.container} data-tid="container">
      <div className={styles.tabs}>
        <div className={styles.tab}>
            <Link to={routes.DATA}>Data</Link>
        </div>
        <div className={styles.tab}>
            <Link to={routes.LABEL}>Label</Link>
        </div>
        <div className={styles.tab}>
            <Link to={routes.COMBO}>Combo</Link>
        </div>
        <div className={styles.tab}>
            <Link to={routes.UPLOAD}>Upload</Link>
        </div>
      </div>
    </div>
  );
}
