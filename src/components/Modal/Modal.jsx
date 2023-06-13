import React, { useEffect } from 'react';

import styles from './Modal.module.scss';
import close from '../../assets/img/close.svg';

const Modal = ({ title, subtitle, children, openModal, setOpenModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openModal]);

  return (
    <div className={[styles.root, openModal ? styles.active : ''].join(' ')}>
      <div className={styles.inner}>
        <button onClick={() => setOpenModal(false)} className={styles.closeBtn}>
          <img src={close} alt="" />
        </button>
        <div className={styles.titleblock}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
