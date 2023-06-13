import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { ReactComponent as PersonalLogo } from '../../assets/img/personalLogo.svg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const userdata = useSelector((state) => state.auth.userdata);

  const [openPopup, setOpenPopup] = useState(false);

  const authPersonal = (
    <div className={styles.personal}>
      <PersonalLogo
        onClick={() => {
          setOpenPopup(!openPopup);
        }}
        className={[styles.personallogo, styles.active].join(' ')}
      />
      <div className={[styles.popup, openPopup ? styles.active : ''].join(' ')}>
        <div className={styles.popupTop}>
          <div className={styles.user}>
            <span>{userdata?.name}</span>
            <span>{userdata?.surname}</span>
          </div>
        </div>
        <div className={styles.popupBottom}>
          <Link to={'/personal'} className={styles.link}>
            Личный кабинет
          </Link>
          <button className={styles.link}>Выйти</button>
        </div>
      </div>
    </div>
  );

  const unAuthPersonal = (
    <Link to={'/login'} className={styles.personal}>
      <PersonalLogo className={styles.personallogo} />
    </Link>
  );

  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <Link to={'/'} className={styles.logo}>
          <img src={logo} alt="" />
        </Link>
        <Navbar />
        {userdata ? authPersonal : unAuthPersonal}
      </div>
    </div>
  );
};

export default Header;
