import React from 'react';

import TitleBlock from '../components/TitleBlock/TitleBlock';
import Filter from '../components/Filter/Filter';

const Catalog = () => {
  const links = [
    { name: 'Главная', url: '/' },
    { name: 'Автомобили в наличии', url: '/catalog' },
  ];
  return (
    <>
      <TitleBlock links={links} title={'Новые Nissan в г. ульяновск'} />
      <Filter />
    </>
  );
};

export default Catalog;
