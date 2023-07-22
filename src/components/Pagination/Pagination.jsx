import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/arrowRight.svg';
import { nextPage, prevPage } from '../../redux/slices/pageSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageCount, currentPage } = useSelector(state => state.page);

  return (
    <div className={styles.root}>
      <button onClick={() => dispatch(prevPage())} className={styles.btn}>
        <Arrow className={[styles.arrow, styles.left].join(' ')} />
      </button>
      <button onClick={() => dispatch(nextPage())} className={styles.btn}>
        <Arrow className={[styles.arrow, styles.right].join(' ')} />
      </button>
    </div>
  );
};

export default Pagination;
