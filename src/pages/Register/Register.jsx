import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './Register.module.scss';
import FormSkeleton from '../../components/FormSkeleton/FormSkeleton';
import FormInput from '../../components/UI/AuthInput/AuthInput';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { fetchRegister, clearStatus } from '../../redux/slices/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { userdata, status } = useSelector((state) => state.auth);
  const {
    register,
    watch,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (status === 'error') {
      dispatch(clearStatus());
    }
  }, []);

  const onSubmit = (value) => {
    const { confirmpassword, ...data } = value;
    dispatch(fetchRegister(data));
  };

  if (userdata) {
    window.localStorage.setItem('token', userdata.token);
    return <Navigate to={'/'} />;
  }

  return (
    <FormSkeleton title={'Регистрация'}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput
          {...register('name', {
            required: 'Введите имя',
            minLength: { value: 2, message: 'Минимальная длина имени 2 символов' },
          })}
          label={'Введите имя'}
          id={'name'}
          type={'text'}
          error={errors.name?.message}
        />
        <FormInput
          {...register('email', { required: 'Введите почту' })}
          label={'Введите e-mail'}
          id={'email'}
          type={'email'}
          error={errors.email?.message}
        />
        <FormInput
          {...register('password', {
            required: 'Введите пароль',
            minLength: { value: 5, message: 'Минимальная длина пароля 5 символов' },
          })}
          label={'Введите пароль'}
          id={'password'}
          type={'password'}
          error={errors.password?.message}
        />
        <FormInput
          {...register('confirmpassword', {
            required: 'Подтвердите пароль',
            validate: (value) => {
              if (watch('password') !== value) {
                return 'Пароли не совпадают';
              }
            },
          })}
          label={'Подтвердите пароль'}
          id={'confirmpassword'}
          type={'password'}
          error={errors.confirmpassword?.message}
        />
        {status === 'error' && <ErrorBox error={'Не удалось зарегистрироваться'} />}

        <div className={styles.btnbox}>
          <button disabled={!isValid} type="submit" className={styles.btn}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </FormSkeleton>
  );
};

export default Register;
