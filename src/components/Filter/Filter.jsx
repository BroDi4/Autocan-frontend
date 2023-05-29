import React from 'react';

import styles from './Filter.module.scss';
import ParamFilter from '../ParamFilter/ParamFilter';
import DetailFilter from '../DetailFilter/DetailFilter';

const Filter = () => {
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.top}>
          <ParamFilter />
          {/* <div className={styles.params}>
            <div className={styles.age}>
              {ageVariants.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={[styles.btn, selectedAge === i ? styles.active : ''].join(' ')}
                    onClick={() => {
                      dispatch(setSelectedAge(i));
                    }}>
                    {item}
                  </button>
                );
              })}
            </div>
            <div className={styles.settings}>
              <Select
                selectedItem={selectedDrive}
                setSelectedItem={setSelectedDrive}
                options={driveVariants}
                id={'drive'}
              />
              <Select
                selectedItem={selectedModel}
                setSelectedItem={setSelectedModel}
                options={[]}
                id={'model'}
              />
              <Select
                selectedItem={selectedBox}
                setSelectedItem={setSelectedBox}
                options={boxVariants}
                id={'box'}
              />
              <Select
                selectedItem={selectedColor}
                setSelectedItem={setSelectedColor}
                options={colorVariants}
                id={'color'}
              />
            </div>
          </div> */}
          <DetailFilter />
        </div>
      </div>
    </div>
  );
};

export default Filter;
