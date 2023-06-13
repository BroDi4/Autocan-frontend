import React, { forwardRef } from 'react';

import styles from './FormSelect.module.scss';
import { ReactComponent as Arrow } from '../../../assets/img/arrow.svg';

const FormSelect = forwardRef(({ label, name, onChange, onBlur, options, errors }, ref) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <div className={styles.inputBox}>
        <select name={name} onChange={onChange} onBlur={onBlur} ref={ref} className={styles.input}>
          {options.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div className={styles.imgbox}>
          <Arrow className={styles.img} />
        </div>
      </div>
      <span className={styles.error}>{errors}</span>
    </div>
  );
});

export default FormSelect;
