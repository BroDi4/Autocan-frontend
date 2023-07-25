import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Personal from './pages/Personal';
import NotFound from './pages/NotFound/NotFound';
import { fetchAuth } from './redux/slices/authSlice';
import { fetchCategory } from './redux/slices/categorySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuth());
    dispatch(fetchCategory());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
