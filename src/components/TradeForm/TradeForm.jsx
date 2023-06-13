import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../axios';

import styles from './TradeForm.module.scss';
import FormInput from '../UI/FormInput/FormInput';
import FormSelect from '../UI/FormSelect/FormSelect';

const TradeForm = ({ setOpenModal }) => {
  const models = useSelector((state) => state.category.data?.model) || [];
  const userdata = useSelector((state) => state.auth.userdata);
  const modelsList = models.map((item) => item.name);

  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      cusCar: 'Nissan Qaskai',
      cusEquipment: 'XE',
      phone: '',
      name: '',
      shopCar: 'Nissan Qaskai',
      shopEquipment: 'XE',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (userdata) {
      setValue('name', userdata.name);
    }
  }, [userdata]);

  const findEquipment = (car) => {
    return models.find((item) => item.name === car)?.equipment || [];
  };

  const cusCar = watch('cusCar');
  const shopCar = watch('shopCar');
  const cusEquipment = findEquipment(cusCar);
  const shopEquipment = findEquipment(shopCar);

  const onSubmit = (value) => {
    try {
      axios.post('/trade', value);
      setOpenModal(false);
      reset();
    } catch (err) {
      alert('Не удалось оставить заявку!');
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <div className={styles.inner}>
          <div className={styles.formblock}>
            <div className={styles.imgbox}>
              <img src={models.find((item) => item.name === cusCar)?.imgUrl} alt="" />
            </div>
            <div className={styles.field}>
              <FormSelect
                label={'Ваш автомобиль'}
                options={modelsList || []}
                {...register('cusCar', { required: 'Выберите автомобиль' })}
                errors={errors.cusCar?.message}
              />
            </div>
            <div className={styles.field}>
              <FormSelect
                label={'Комплектация'}
                options={cusEquipment}
                {...register('cusEquipment', { required: 'Выберите комплектацию' })}
                errors={errors.cusEquipment?.message}
              />
            </div>
          </div>
          <div className={styles.formblock}>
            <div className={styles.field}>
              <FormInput
                label={'Телефон'}
                placeholder={'+7'}
                {...register('phone', { required: 'Введите телефон' })}
                errors={errors.phone?.message}
              />
            </div>
            <div className={styles.field}>
              <FormInput
                label={'Имя'}
                placeholder={'Укажите ваше имя'}
                {...register('name', { required: 'Укажите ваше имя' })}
                errors={errors.name?.message}
              />
            </div>
          </div>
          <div className={styles.formblock}>
            <div className={styles.imgbox}>
              <img src={models.find((item) => item.name === shopCar)?.imgUrl} alt="" />
            </div>
            <div className={styles.field}>
              <FormSelect
                label={'Наш автомобиль'}
                options={modelsList || []}
                {...register('shopCar', { required: 'Выберите автомобиль' })}
                errors={errors.shopCar?.message}
              />
            </div>
            <div className={styles.field}>
              <FormSelect
                label={'Комплектация'}
                options={shopEquipment}
                {...register('shopEquipment', { required: 'Выберите комплектацию' })}
                errors={errors.shopEquipment?.message}
              />
            </div>
          </div>
        </div>
        <div className={styles.btnbox}>
          <button className={styles.btn} disabled={!isValid} onClick={handleSubmit(onSubmit)}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
