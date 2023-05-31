import React from 'react';

import styles from './Offeritem.module.scss';
import nissanLogo from '../../assets/img/nissanlogo.svg';

const OfferItem = ({ product, specialprice }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleblock}>
        <img src={nissanLogo} alt="" />
        <h3 className={styles.title}>Nissan</h3>
      </div>
      <div className={styles.subtitle}>{product.model.name}</div>
      <div className={styles.imgBox}>
        <img src={product.model.imgUrl} alt="" />
      </div>
      <div className={styles.priceblock}>
        <p className={styles.price}>Стоимость машины со скидкой составляет {specialprice} руб</p>
        <span>Осталось {product.count} авто</span>
      </div>
    </div>
  );
};

export default OfferItem;
