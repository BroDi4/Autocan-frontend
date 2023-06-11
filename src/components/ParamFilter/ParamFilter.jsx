import React, { useEffect, useState } from 'react';
import axios from '../../axios';

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
  const { selectedAge, selectedDrive, selectedModel, selectedBox, selectedColor } = useSelector(
    (state) => state.filter,
  );

  const [driveVariants, setDriveVariants] = useState([]);
  const [boxVariants, setBoxVariants] = useState([]);
  const [colorVariants, setColorVariants] = useState([]);
  const [modelVariants, setModelVariants] = useState([]);

  const ageVariants = ['Новые', 'С пробегом'];

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories');
      const data = response.data;
      setDriveVariants(data.drives);
      setBoxVariants(data.box);
      setColorVariants(data.colors);
      setModelVariants(data.model);
    } catch (err) {
      alert('Произошла ошибка при загрузке данных, повторите попытку позже');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
          setSelectedItem={(value) => dispatch(setSelectedDrive(value))}
          options={driveVariants}
        />
        <Select
          selectedItem={selectedModel}
          setSelectedItem={(value) => dispatch(setSelectedModel(value))}
          options={modelVariants}
        />
        <Select
          selectedItem={selectedBox}
          setSelectedItem={(value) => dispatch(setSelectedBox(value))}
          options={boxVariants}
        />
        <Select
          selectedItem={selectedColor}
          setSelectedItem={(value) => dispatch(setSelectedColor(value))}
          options={colorVariants}
        />
      </div>
    </div>
  );
};

export default ParamFilter;
