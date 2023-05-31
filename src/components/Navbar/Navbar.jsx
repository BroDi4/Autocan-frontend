import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.root}>
      <Link to={'/catalog'} className={styles.link}>
        Каталог
      </Link>
      <button className={styles.link}>Автокредит</button>
      <button className={styles.link}>Трейд-ин</button>
    </div>
  );
};

export default Navbar;
