import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import styles from './Login.module.scss';
import FormSkeleton from '../../components/FormSkeleton/FormSkeleton';
import FormInput from '../../components/UI/FormInput/FormInput';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { fetchLogin, clearStatus } from '../../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { userdata, status } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (status === 'error') {
      dispatch(clearStatus());
    }
  }, []);

  const onSubmit = (value) => {
    dispatch(fetchLogin(value));
  };

  if (userdata) {
    window.localStorage.setItem('token', userdata.token);
    return <Navigate to={'/'} />;
  }

  return (
    <FormSkeleton title={'Авторизация'}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('email', { required: 'Введите почту' })}
          label={'Введите e-mail'}
          id={'email'}
          type={'email'}
          error={errors.email?.message}
        />
        <FormInput
          {...register('password', { required: 'Введите пароль' })}
          label={'Введите пароль'}
          id={'password'}
          type={'password'}
          error={errors.password?.message}
        />
        {status === 'error' && <ErrorBox error={'Неверный логин или пароль'} />}

        <div className={styles.btnbox}>
          <button disabled={!isValid} type="submit" className={styles.btn}>
            Войти
          </button>
        </div>

        <div className={styles.linkblock}>
          <Link className={styles.link} to={'/'}>
            Не удается войти?
          </Link>
          <Link className={styles.link} to={'/register'}>
            Регистрация
          </Link>
        </div>
      </form>
    </FormSkeleton>
  );
};

export default Login;
