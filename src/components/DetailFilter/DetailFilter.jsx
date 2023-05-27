import React, { useState } from 'react';

import styles from './DetailFilter.module.scss';
import RangeInput from '../UI/RangeInput/RangeInput';

const DetailFilter = () => {
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(2000);
  const [mileage, setMileage] = useState(0);
  const [power, setPower] = useState(70);
  console.log('rerender');

  return (
    <div className={styles.root}>
      <RangeInput
        min={0}
        max={50000000}
        step={1000000}
        title={'Цена'}
        value={price}
        setValue={setPrice}
      />
      <RangeInput
        min={2000}
        max={2023}
        step={1}
        title={'Год выпуска'}
        value={year}
        setValue={setYear}
      />
      <RangeInput
        min={0}
        max={500000}
        step={10000}
        title={'Пробег'}
        value={mileage}
        setValue={setMileage}
      />
      <RangeInput
        min={70}
        max={600}
        step={10}
        title={'Мощность, л.с'}
        value={power}
        setValue={setPower}
      />
    </div>
  );
};

export default DetailFilter;
