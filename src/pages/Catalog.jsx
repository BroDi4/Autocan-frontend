import React from 'react';

import TitleBlock from '../components/TitleBlock/TitleBlock';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/ProductList/ProductList';

const Catalog = () => {
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
