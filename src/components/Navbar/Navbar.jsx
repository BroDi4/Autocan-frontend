import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.root}>
      <button className={styles.link}>Каталог</button>
      <button className={styles.link}>Автокредит</button>
      <button className={styles.link}>Трейд-ин</button>
      <button className={styles.link}>Акции</button>
      <button className={styles.link}>Контакты</button>
    </div>
  );
};

export default Navbar;
