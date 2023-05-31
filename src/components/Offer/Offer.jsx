import React, { useEffect, useState } from 'react';
import { axiosQuery } from '../../axios';

import styles from './Offer.module.scss';
import Slider from '../Slider/Slider';
import OfferItem from '../OfferItem/OfferItem';

const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await axiosQuery.get('/offer');
      setOffers(response.data);
    };
    fetchOffers();
  }, []);

  const slideCount = [...new Array(Math.ceil(offers.length / 3))];
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <h2 className={styles.title}>Предложения дня</h2>
        <Slider>
          {slideCount.map((_, i) => {
            return (
              <div key={i} className={styles.slide}>
                {offers.slice(i * 3, i * 3 + 3).map((obj) => {
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
