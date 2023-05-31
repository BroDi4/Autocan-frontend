import React from 'react';

import styles from './AdvantagesItem.module.scss';

const AdvantagesItem = ({ img, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imgbox}>
        <img src={img} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AdvantagesItem;
