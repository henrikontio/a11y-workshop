import React from 'react';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <header className={'app-header'}>
      <Link className={'app-header-logo'} to={'/'}>
        <Logo />
        <h3 className={'app-heading'}>a11y Portal</h3>
      </Link>
      {children && children}
    </header>
  )
}

export default Header;