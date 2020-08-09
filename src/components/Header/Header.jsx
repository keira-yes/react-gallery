import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../img/logo.svg";
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="Portfolio City logo"/>
        <span>Portfolio City</span>
      </Link>
    </header>
  )
};

export default Header;