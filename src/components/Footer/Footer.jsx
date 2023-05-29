import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '' },
    { name: 'Menu', url: '' },
    { name: 'Contact', url: '' },
    { name: 'Bookings', url: '' },
    { name: 'Privacy Policy', url: '' },
    { name: 'Style Guide', url: '' },
    { name: 'Licenses', url: '' },
    { name: 'Instructions', url: '' },
    { name: 'Changelog', url: '' },
    { name: 'Password', url: '' },
    { name: '404', url: '/notfound' },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.linkblock}>
          {links.map((obj, i) => {
            return (
              <Link className={styles.item} key={i} to={obj.url}>
                {obj.name}
              </Link>
            );
          })}
        </div>
        <div className={styles.copyright}>
          <span>© Autocan 2023.</span>
          <span>Built by Denis Petrov.</span>
          <span>Powered by Webflow.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
