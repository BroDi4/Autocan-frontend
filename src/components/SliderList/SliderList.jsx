import React, { useContext } from 'react';

import styles from './SliderList.module.scss';

const SliderList = ({ items, slide, onTouchStart, onTouchMove }) => {
  return (
    <div className={styles.slider}>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        style={{ transform: `translateX(-${slide * 100}%)` }}
        className={styles.sliderLine}>
        {items.map((obj, i) => {
          return (
            <div key={i} className={styles.slide}>
              {obj}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderList;
