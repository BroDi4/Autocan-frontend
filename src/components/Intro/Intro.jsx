import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.titleblock}>
          <h3>
            Официальный дилер <span>Nissan</span>{' '}
          </h3>
          <h1>КУПИТЕ АВТОМОБИЛЬ С ПРОВЕРЕННОЙ ИСТОРИЕЙ!</h1>
          <Link to={'/catalog'} className={styles.btn}>
            Каталог автомобилей
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
