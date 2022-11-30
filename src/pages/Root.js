import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Root = () => {
  return (
    <div className={'app'}>
      <Header><Navigation /></Header>
      <div className={'app-main'}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )  
};

export default Root;
