import React, { forwardRef } from 'react';

import styles from './FormInput.module.scss';

const FormInput = forwardRef(({ label, placeholder, onChange, onBlur, name, errors }, ref) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        className={styles.input}
        placeholder={placeholder}
        type="text"
      />
      <span className={styles.error}>{errors}</span>
    </div>
  );
});

export default FormInput;
