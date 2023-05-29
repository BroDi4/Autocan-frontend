import React from 'react';

import styles from './ProductItem.module.scss';

const ProductItem = ({ model, equipment, price }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.titleblock}>
          <h3>{model.name}</h3>
          <span>{equipment}</span>
        </div>
        <div className={styles.imgBox}>
          <img src={model.imgUrl} alt="" />
        </div>
      </div>
      <div className={styles.priceBlock}>
        <span className={styles.price}>{price} ₽</span>
        <span className={styles.address}>Autocan / Ульяновск</span>
      </div>
    </div>
  );
};

export default ProductItem;
