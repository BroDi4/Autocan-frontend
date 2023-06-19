import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Intro.module.scss';
import Slider from '../Slider/Slider';
import slide1 from '../../assets/img/backgrounds/slide1.jpg';
import slide2 from '../../assets/img/backgrounds/slide2.png';
import slide3 from '../../assets/img/backgrounds/slide3.jpeg';

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.slider}>
        <Slider autoPlayInterval={5000} showArrows={false} variant={'dark'}>
          <div className={styles.imgbox}>
            <div className={styles.background}></div>
            <img src={slide1} alt="" />
          </div>
          <div className={styles.imgbox}>
            <div className={styles.background}></div>
            <img src={slide2} alt="" />
          </div>
          <div className={styles.imgbox}>
            <div className={styles.background}></div>
            <img src={slide3} alt="" />
          </div>
        </Slider>
      </div>

      <div className="container">
        <div className={styles.titleblock}>
          <h3>
            Официальный дилер <span>Nissan</span>{' '}
          </h3>
          <h1>КУПИТЕ АВТОМОБИЛЬ С ПРОВЕРЕННОЙ ИСТОРИЕЙ!</h1>
          <Link to={'/catalog'} className={styles.btn}>
            Каталог автомобилей
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
