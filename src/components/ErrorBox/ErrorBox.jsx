import React from 'react';

import styles from './ErrorBox.module.scss';

const ErrorBox = ({ error }) => {
  return <div className={styles.root}>{error}</div>;
};

export default ErrorBox;
