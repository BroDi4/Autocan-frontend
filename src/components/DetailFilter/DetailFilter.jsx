import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setMileage, setPower, setPrice, setYear } from '../../redux/slices/rangeFilterSlice';
import styles from './DetailFilter.module.scss';
import RangeInput from '../UI/RangeInput/RangeInput';

const DetailFilter = () => {
  const { price, year, mileage, power } = useSelector((state) => state.rangeFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <RangeInput
        min={0}
        max={50000000}
        step={1000000}
        title={'Цена'}
        value={price}
        setValue={(value) => {
          dispatch(setPrice(value));
        }}
      />
      <RangeInput
        min={2000}
        max={2023}
        step={1}
        title={'Год выпуска'}
        value={year}
        setValue={(value) => {
          dispatch(setYear(value));
        }}
      />
      <RangeInput
        min={0}
        max={500000}
        step={10000}
        title={'Пробег'}
        value={mileage}
        setValue={(value) => {
          dispatch(setMileage(value));
        }}
      />
      <RangeInput
        min={70}
        max={600}
        step={10}
        title={'Мощность, л.с'}
        value={power}
        setValue={(value) => {
          dispatch(setPower(value));
        }}
      />
    </div>
  );
};

export default DetailFilter;
