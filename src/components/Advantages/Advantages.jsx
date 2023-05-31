import React from 'react';

import styles from './Advantages.module.scss';
import AdvantagesItem from '../AdvantagesItem/AdvantagesItem';
import logo1 from '../../assets/img/advantages/logo1.svg';
import logo2 from '../../assets/img/advantages/logo2.svg';
import logo3 from '../../assets/img/advantages/logo3.svg';
import logo4 from '../../assets/img/advantages/logo4.svg';
import logo5 from '../../assets/img/advantages/logo5.svg';

const items = [
  { img: logo1, text: 'Диагностика и оценка автомобиля бесплатно' },
  { img: logo2, text: 'Бесплатная доставка во все регионы РФ' },
  { img: logo3, text: 'Одобрение заявки в течении 10 минут' },
  { img: logo4, text: 'Более 30 точек продаж в РФ' },
  { img: logo5, text: 'Простой и быстрый порядок оформления документов' },
];

const Advantages = () => {
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.list}>
          {items.map((obj, i) => {
            return <AdvantagesItem key={i} {...obj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
