import React from 'react';

import styles from './Dots.module.scss';

const Dots = ({ slide, slideLength, goToSlide, variant, dotMargin }) => {
  const dotStyle = variant === 'dark' ? styles.dark : styles.light;
  return (
    <div style={dotMargin && { marginTop: `${dotMargin}px` }} className={styles.root}>
      {[...new Array(slideLength)].map((_, i) => {
        return (
          <span
            onClick={() => goToSlide(i)}
            key={i}
            className={[styles.item, dotStyle, slide === i ? styles.active : ''].join(' ')}></span>
        );
      })}
    </div>
  );
};

export default Dots;
