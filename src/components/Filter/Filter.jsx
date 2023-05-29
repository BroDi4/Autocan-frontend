import React from 'react';

import styles from './Filter.module.scss';
import ParamFilter from '../ParamFilter/ParamFilter';
import DetailFilter from '../DetailFilter/DetailFilter';

const Filter = () => {
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.top}>
          <ParamFilter />
          <DetailFilter />
        </div>
        {/* <div className={styles.bottom}>
          <button className={styles.btn}>Сбросить фильтры</button>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
