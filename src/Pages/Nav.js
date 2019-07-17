import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Nav = () => (
  <ul className={styles.nav}>
    <li>
      <NavLink
        to="/"
        exact
        activeStyle={activeStyle}
        className={styles.navItem}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle} className={styles.navItem}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/pets" activeStyle={activeStyle} className={styles.navItem}>
        Pets
      </NavLink>
    </li>
  </ul>
);

export default Nav;
