import React from 'react';
import logo from '../../static/images/logo.svg';
import classes from '../../static/css/Header/Header.module.css';

const Header = () => {
    return (
      <header className={classes.header}>
        <ul className={classes.list}>
          <li><img className={classes.logo} alt="logo" src={logo}></img></li>
          <li><h1>JS Social Network</h1></li>
        </ul>
      </header>
    );
}

export default Header;