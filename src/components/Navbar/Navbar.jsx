import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';
import Modal from '../Modal/Modal';
import TradeForm from '../TradeForm/TradeForm';
import CreditForm from '../CreditForm/CreditForm';

const Navbar = () => {
  const [tradeIsOpen, setTradeIsOpen] = useState(false);
  const [creditIsOpen, setCreditIsOpen] = useState(false);
  const userdata = useSelector(state => state.auth.userdata);

  const authNavbar = (
    <>
      <Link to={'/catalog'} className={styles.link}>
        Каталог
      </Link>
      <button onClick={() => setCreditIsOpen(true)} className={styles.link}>
        Автокредит
      </button>
      <button onClick={() => setTradeIsOpen(true)} className={styles.link}>
        Трейд-ин
      </button>
    </>
  );

  const unAuthNavbar = (
    <>
      <Link to={'/catalog'} className={styles.link}>
        Каталог
      </Link>
      <Link to={'/login'} className={styles.link}>
        Автокредит
      </Link>
      <Link to={'/login'} className={styles.link}>
        Трейд-ин
      </Link>
      <Link to={'/'} className={styles.link}>
        Акции
      </Link>
      <Link to={'/'} className={styles.link}>
        Контакты
      </Link>
    </>
  );

  return (
    <div className={styles.root}>
      {userdata ? authNavbar : unAuthNavbar}
      <Modal
        title={'Трейд-ин'}
        subtitle={'Удобный и быстрый способ обменять свое авто.'}
        openModal={tradeIsOpen}
        setOpenModal={setTradeIsOpen}>
        <TradeForm setOpenModal={setTradeIsOpen} />
      </Modal>
      <Modal
        title={'Автокредит'}
        subtitle={'КРЕДИТНЫЙ КАЛЬКУЛЯТОР'}
        openModal={creditIsOpen}
        setOpenModal={setCreditIsOpen}>
        <CreditForm setOpenModal={setCreditIsOpen} />
      </Modal>
    </div>
  );
};

export default Navbar;
