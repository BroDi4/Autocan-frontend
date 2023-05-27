import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkBlock.module.scss';
import settingsLogo from '../../assets/img/settings.svg';

const LinkBlock = () => {
  return (
    <div className={styles.root}>
      <div className={[styles.inner, 'container'].join(' ')}>
        <Link to={'/catalog'} className={styles.btn}>
          Показать 50 авто
        </Link>
        <div className={styles.settings}>
          <img src={settingsLogo} alt="" />
          <span>Параметры</span>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
