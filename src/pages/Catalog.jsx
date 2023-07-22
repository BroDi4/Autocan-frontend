import React, { useEffect } from 'react';

import TitleBlock from '../components/TitleBlock/TitleBlock';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/ProductList/ProductList';

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const links = [
    { name: 'Главная', url: '/' },
    { name: 'Автомобили в наличии', url: '/catalog' },
  ];

  return (
    <>
      <TitleBlock links={links} title={'Новые Nissan в г. ульяновск'} />
      <Filter />
      <ProductList />
    </>
  );
};

export default Catalog;
