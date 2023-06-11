import React from 'react';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <h2>Ошибка 404</h2>
        <p>Страница не найдена 😥</p>
      </div>
    </div>
  );
};

export default NotFound;
