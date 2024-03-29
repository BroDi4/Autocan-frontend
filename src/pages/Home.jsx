import React, { useEffect } from 'react';

import Intro from '../components/Intro/Intro';
import Filter from '../components/Filter/Filter';
import LinkBlock from '../components/LinkBlock/LinkBlock';
import Offer from '../components/Offer/Offer';
import Advantages from '../components/Advantages/Advantages';
import Comments from '../components/Comments/Comments';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Intro />
      <Filter />
      <LinkBlock />
      <Offer />
      <Advantages />
      <Comments />
    </>
  );
};

export default Home;
