import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';

import styles from './PersonalForm.module.scss';
import personalimg from '../../assets/img/personalimg.svg';
import FormInput from '../UI/FormInput/FormInput';
import FormSelect from '../UI/FormSelect/FormSelect';
import { fetchAuth } from '../../redux/slices/authSlice';

const city = ['Ульяновск', 'Самара', 'Тольятти', 'Казань'];

const PersonalForm = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userdata);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      lastname: '',
      name: '',
      surname: '',
      email: '',
      city: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (userdata) {
      setValue('lastname', userdata.lastname);
      setValue('name', userdata.name);
      setValue('surname', userdata.surname);
      setValue('email', userdata.email);
      setValue('city', userdata.city);
    }
  }, [userdata]);

  const onSubmit = async (value) => {
    try {
      await axios.patch('/user', value);
      dispatch(fetchAuth());
      alert('Данные пользователя изменены!');
    } catch (err) {
      alert('Не удалось изменить данные!');
    }
  };

  console.log(errors);

  return (
    <div className={styles.root}>
      <div className={'container'}>
        <div className={styles.titleblock}>
          <h2>Профиль</h2>
        </div>
        <div className={styles.inner}>
          <form className={styles.form}>
            <FormInput
              type={'text'}
              label={'Фамилия'}
              placeholder={'Введите фамилию'}
              {...register('lastname')}
            />
            <FormInput
              type={'text'}
              label={'Имя'}
              placeholder={'Введите имя'}
              {...register('name', { required: 'Введите имя' })}
              errors={errors.name?.message}
            />
            <FormInput
              type={'text'}
              label={'Отчество'}
              placeholder={'Введите отчество'}
              {...register('surname')}
            />
            <FormInput
              type={'email'}
              label={'Электронная почта'}
              placeholder={'Введите почту'}
              {...register('email', { required: 'Введите почту' })}
              errors={errors.email?.message}
            />
            <FormSelect
              label={'Ваш город'}
              options={city}
              placeholder={'Выберите город'}
              {...register('city')}
            />
            <button onClick={handleSubmit(onSubmit)} className={styles.button}>
              Сохранить изменения
            </button>
          </form>
          <div className={styles.imgbox}>
            <img src={personalimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
