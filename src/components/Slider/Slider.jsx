import React, { useState, createContext, useEffect } from 'react';

import styles from './Slider.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/arrowRight.svg';
import SliderList from '../SliderList/SliderList';
import Dots from '../Dots/Dots';

const Slider = ({ children, autoPlayInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const slideLength = children.length;

  const rollSlider = (direction) => {
    if (currentSlide + direction < 0) {
      setCurrentSlide(slideLength - 1);
    } else if (currentSlide + direction > slideLength - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + direction);
    }
  };

  const goToSlide = (slideId) => {
    setCurrentSlide(slideId);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      rollSlider(1);
    }

    if (direction < -10) {
      rollSlider(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(() => {
      rollSlider(1);
    }, autoPlayInterval);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);
  return (
    <>
      <div className={styles.root}>
        <div className={styles.arrowBox}>
          <Arrow onClick={() => rollSlider(-1)} className={[styles.arrow, styles.left].join(' ')} />
        </div>

        <SliderList
          slide={currentSlide}
          items={children}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        />

        <div className={styles.arrowBox}>
          <Arrow onClick={() => rollSlider(1)} className={[styles.arrow, styles.right].join(' ')} />
        </div>
      </div>
      <Dots slide={currentSlide} goToSlide={goToSlide} slideLength={slideLength} />
    </>
  );
};

export default Slider;
