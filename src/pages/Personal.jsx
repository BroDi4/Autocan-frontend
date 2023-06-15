import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TitleBlock from '../components/TitleBlock/TitleBlock';
import PersonalForm from '../components/PersonalForm/PersonalForm';

const links = [
  { name: 'Главная', url: '/' },
  { name: 'Личный кабинет', url: '/personal' },
];

const Personal = () => {
  const userdata = useSelector((state) => state.auth.userdata);

  if (!userdata) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <TitleBlock links={links} title={'Личный кабинет'} />
      <PersonalForm />
    </div>
  );
};

export default Personal;
