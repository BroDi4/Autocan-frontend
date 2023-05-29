import React, { useEffect, useState, useRef } from 'react';

import styles from './Select.module.scss';
import { ReactComponent as ArrowLogo } from '../../../assets/img/arrow.svg';

const Select = ({ selectedItem, setSelectedItem, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const select = useRef(null);

  const onClickItem = (obj) => {
    setSelectedItem(obj);
    setIsOpen(false);
  };

  const checkOutsideClick = (e) => {
    if (select.current && !select.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', checkOutsideClick);
    return () => {
      document.removeEventListener('click', checkOutsideClick);
    };
  }, []);

  return (
    <div
      ref={select}
      id={selectedItem._id}
      className={[styles.root, isOpen ? styles.active : ''].join(' ')}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.inner}>
        <span>{selectedItem.name}</span>
        <ArrowLogo className={[styles.logo, isOpen ? styles.active : ''].join(' ')} />
      </div>
      <div className={[styles.modal, isOpen ? styles.active : ''].join(' ')}>
        {options.map((obj) => {
          return (
            <span onClick={() => onClickItem(obj)} key={obj._id} className={styles.item}>
              {obj.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
