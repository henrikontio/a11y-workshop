import React from 'react';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <div className={'app-header'}>
      <span className={'app-header-logo'}>
        <Link to={'/'}>
          <Logo />
        </Link>
      </span>
      <h3 className={'app-heading'}>a11y Portal</h3>
      {children && children}
    </div>
  )
}

export default Header;