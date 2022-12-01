import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet';

const Root = () => {
  return (
    <div className={'app'}>
      <Helmet>
        <title>Welcome to a11y workshop</title>
        <html lang={'en'}></html>
      </Helmet>
      <Header><Navigation /></Header>
      <div className={'app-main'}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )  
};

export default Root;
