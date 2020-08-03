import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Start', path: '/', icon: 'fas fa-home fa-2x', exact: true },
  { name: 'O nas', path: '/about', icon: 'fas fa-users fa-2x' },
  { name: 'Adopcja', path: '/adoption', icon: 'fas fa-paw fa-2x' },
  { name: 'Wolontariat', path: '/volunteering', icon: 'fas fa-heart fa-2x' },
  { name: 'Kontakt', path: '/contact', icon: 'fas fa-envelope fa-2x' },
]

const Navigation = ({ showNav, clicked }) => {
  const items = links.map(item => (
    <li key={item.name} className="header__navigation-list-item">
      <NavLink
        to={item.path}
        className="header__navigation-list-item-link"
      >
        <i className={item.icon}></i>
        <span className="header__navigation-list-item-title">{item.name}</span>
      </NavLink>
    </li>
  ))

  return (
    <nav className={showNav ? "header__navigation" : "header__navigation header__navigation--hide"} >
      <ul className="header__navigation-list">
        {items}
      </ul>
    </nav >
  );
}

export default Navigation;

