import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { ReactComponent as PersonalLogo } from '../../assets/img/personalLogo.svg';
import Navbar from '../Navbar/Navbar';
import PersonalPopup from '../PersonalPopup/PersonalPopup';

const Header = () => {
  const userdata = useSelector((state) => state.auth.userdata);
  const personalRef = useRef();

  const [openPopup, setOpenPopup] = useState(false);

  const checkOutsideClick = (e) => {
    if (personalRef.current && !personalRef.current.contains(e.target)) {
      setOpenPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', checkOutsideClick);
    return () => {
      document.removeEventListener('click', checkOutsideClick);
    };
  }, []);

  const authPersonal = (
    <div className={styles.personal} ref={personalRef}>
      <PersonalLogo
        onClick={() => {
          setOpenPopup(!openPopup);
        }}
        className={[styles.personallogo, styles.active].join(' ')}
      />
      <PersonalPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
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
