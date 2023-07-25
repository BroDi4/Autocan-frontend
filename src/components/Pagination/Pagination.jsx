import React from 'react';

import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/arrowRight.svg';

const Pagination = ({ page, pages, setPage }) => {
  const nextPage = () => {
    if (!(page + 1 > pages)) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (!(page - 1 === 0)) {
      setPage(page - 1);
    }
  };

  const btns = new Array(pages).fill().map((_, i) => i + 1);

  return (
    <div className={styles.root}>
      <button disabled={page - 1 === 0} onClick={prevPage} className={styles.btn}>
        <Arrow className={[styles.arrow, styles.left].join(' ')} />
      </button>
      {btns.map((item, i) => (
        <button
          onClick={() => setPage(item)}
          key={i}
          className={[styles.btn, page === item ? styles.active : ''].join(' ')}>
          {item}
        </button>
      ))}
      <button disabled={page + 1 > pages} onClick={nextPage} className={styles.btn}>
        <Arrow className={[styles.arrow, styles.right].join(' ')} />
      </button>
    </div>
  );
};

export default Pagination;
