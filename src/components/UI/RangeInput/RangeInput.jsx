import React, { useState } from 'react';

import styles from './RangeInput.module.scss';

const RangeInput = ({ min, max, title, value, setValue, step }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <input
        min={min}
        max={max}
        step={step}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        type="range"
      />
      <div className={styles.bottom}>
        <span>{value >= min + step ? value : title}</span>
      </div>
    </div>
  );
};

export default RangeInput;
