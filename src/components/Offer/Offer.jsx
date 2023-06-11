import React, { useEffect, useState } from 'react';
import axios from '../../axios';

import styles from './Offer.module.scss';
import Slider from '../Slider/Slider';
import OfferItem from '../OfferItem/OfferItem';

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [size, setSize] = useState(3);

  const handleWindowSize = (e) => {
    const width = e.target.innerWidth;
    chechWindowWidth(width);
  };

  const chechWindowWidth = (width) => {
    if (width <= 1100 && width > 769) {
      setSize(2);
    } else if (width <= 769) {
      setSize(1);
    } else {
      setSize(3);
    }
  };

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await axios.get('/offer');
      setOffers(response.data);
    };
    fetchOffers();

    chechWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  const slideCount = [...new Array(Math.ceil(offers.length / size))];
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <h2 className={styles.title}>Предложения дня</h2>
        <Slider>
          {slideCount.map((_, i) => {
            return (
              <div key={i} className={styles.slide}>
                {offers.slice(i * size, i * size + size).map((obj) => {
                  return <OfferItem key={obj._id} {...obj} />;
                })}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
