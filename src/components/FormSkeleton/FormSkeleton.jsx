import React from 'react';

import styles from './FormSkeleton.module.scss';
import logo from '../../assets/img/logo.svg';

const FormSkeleton = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <div className={styles.imgbox}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={styles.inner}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FormSkeleton;
