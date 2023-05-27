import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Filter.module.scss';
import Select from '../UI/Select/Select';
import DetailFilter from '../DetailFilter/DetailFilter';

const Filter = () => {
  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedDrive, setSelectedDrive] = useState({ name: 'Привод', value: '' });
  const [selectedModel, setSelectedModel] = useState({ name: 'Модель', value: '' });
  const [selectedBox, setSelectedBox] = useState({ name: 'Коробка', value: '' });
  const [selectedColor, setSelectedColor] = useState({ name: 'Цвет', value: '' });

  const ageVariants = ['Новые', 'С пробегом'];
  const driveVariants = [
    { name: 'Полный привод', value: 'full' },
    { name: 'Передний привод', value: 'forward' },
    { name: 'Задний привод', value: 'back' },
  ];

  const boxVariants = [
    { name: 'МКПП', value: 'mechanic' },
    { name: 'АКПП', value: 'automatic' },
  ];

  const colorVariants = [
    { name: 'Черный', value: 'black' },
    { name: 'Белый', value: 'white' },
    { name: 'Серый', value: 'grey' },
  ];

  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.top}>
          <div className={styles.params}>
            <div className={styles.age}>
              {ageVariants.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={[styles.btn, selectedAge === i ? styles.active : ''].join(' ')}
                    onClick={() => {
                      setSelectedAge(i);
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
          </div>
          <DetailFilter />
        </div>
        <div className={styles.bottom}>
          <Link to={'/catalog'} className={styles.showBtn}></Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
