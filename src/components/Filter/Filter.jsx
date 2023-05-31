import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Filter.module.scss';
import ParamFilter from '../ParamFilter/ParamFilter';
import DetailFilter from '../DetailFilter/DetailFilter';
import { setToInitialFilter } from '../../redux/slices/filterSlice';
import { setToInitialRangeFilter } from '../../redux/slices/rangeFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(setToInitialFilter());
    dispatch(setToInitialRangeFilter());
  };

  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.top}>
          <ParamFilter />
          <DetailFilter />
        </div>
        <div className={styles.bottom}>
          <button onClick={clearFilters} className={styles.btn}>
            Сбросить фильтры
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
