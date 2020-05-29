import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../img/logo.svg";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Link to="/" className={classes.Logo}>
        <img src={logo} alt="Portfolio City logo"/>
        <span>Portfolio City</span>
      </Link>
    </header>
  )
};

export default Header;