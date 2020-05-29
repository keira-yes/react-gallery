import React from 'react';
import logo from "../../img/logo.svg";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <a href="/" className={classes.Logo}>
        <img src={logo} alt="Portfolio City logo"/>
        <span>Portfolio City</span>
      </a>
    </header>
  )
};

export default Header;