import React from 'react';

import styles from './TitleBlock.module.scss';
import LinksTop from '../LinksTop/LinksTop';

const TitleBlock = ({ links, title }) => {
  return (
    <div className={styles.root}>
      <div className={['container', styles.inner].join(' ')}>
        <LinksTop links={links} />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default TitleBlock;
