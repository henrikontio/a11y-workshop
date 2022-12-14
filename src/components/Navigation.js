import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={'navigation'}>
      <Link className={'nav-item'} to={'/form'}>Signup form</Link>
      <Link className={'nav-item'} to={'/info'}>Information</Link>
    </div>
  )
};

export default Navigation;