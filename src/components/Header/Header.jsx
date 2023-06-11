import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { ReactComponent as PersonalLogo } from '../../assets/img/personalLogo.svg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const userdata = useSelector((state) => state.auth.userdata);
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <Link to={'/'} className={styles.logo}>
          <img src={logo} alt="" />
        </Link>
        <Navbar />
        <Link to={'/login'} className={styles.personal}>
          <PersonalLogo
            className={[styles.personallogo, userdata ? styles.active : ''].join(' ')}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
