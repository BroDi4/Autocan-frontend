import React from 'react';

import {
  setSelectedAge,
  setSelectedBox,
  setSelectedColor,
  setSelectedDrive,
  setSelectedModel,
} from '../../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ParamFilter.module.scss';
import Select from '../UI/Select/Select';

const ParamFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.data);
  const { selectedAge, selectedDrive, selectedModel, selectedBox, selectedColor } = useSelector(
    state => state.filter,
  );

  const ageVariants = ['Новые', 'С пробегом'];

  return (
    <div className={styles.params}>
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
          setSelectedItem={value => dispatch(setSelectedDrive(value))}
          options={categories.drives || []}
        />
        <Select
          selectedItem={selectedModel}
          setSelectedItem={value => dispatch(setSelectedModel(value))}
          options={categories.model || []}
        />
        <Select
          selectedItem={selectedBox}
          setSelectedItem={value => dispatch(setSelectedBox(value))}
          options={categories.box || []}
        />
        <Select
          selectedItem={selectedColor}
          setSelectedItem={value => dispatch(setSelectedColor(value))}
          options={categories.colors || []}
        />
      </div>
    </div>
  );
};

export default ParamFilter;
