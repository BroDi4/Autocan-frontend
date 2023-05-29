import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinksTop.module.scss';
import linkArrow from '../../assets/img/linkarrow.svg';

const LinksTop = ({ links }) => {
  return (
    <div className={styles.root}>
      {links.map((obj) => {
        return (
          <div key={obj.name} className={styles.linkblock}>
            <Link to={obj.url} className={styles.link}>
              {obj.name}
            </Link>
            <img className={styles.img} src={linkArrow} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default LinksTop;
