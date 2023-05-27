import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import personalLogo from '../../assets/img/personalLogo.svg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <Link to={'/'} className={styles.logo}>
          <img src={logo} alt="" />
        </Link>
        <Navbar />
        <div className={styles.personal}>
          <img src={personalLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
