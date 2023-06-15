import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './PersonalPopup.module.scss';
import { logout } from '../../redux/slices/authSlice';

const PersonalPopup = ({ openPopup, setOpenPopup }) => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userdata);

  const onClickLogout = () => {
    setOpenPopup(false);
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <div className={[styles.popup, openPopup ? styles.active : ''].join(' ')}>
      <div className={styles.popupTop}>
        <div className={styles.user}>
          <span>{userdata?.name}</span>
          <span>{userdata?.lastname}</span>
        </div>
      </div>
      <div className={styles.popupBottom}>
        <Link
          onClick={() => {
            setOpenPopup(false);
          }}
          to={'/personal'}
          className={styles.link}>
          Личный кабинет
        </Link>
        <button onClick={onClickLogout} className={styles.link}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default PersonalPopup;
