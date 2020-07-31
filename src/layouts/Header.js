import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
      <Navigation />
      <div className="header__menu-btn">
        <div className="header__menu-btn-line"></div>
        <div className="header__menu-btn-line"></div>
        <div className="header__menu-btn-line"></div>
      </div>
      <div className="header__title">
        <h1 className="header__title-upper">Schronisko dla psów "Arka"</h1>
        <h2 className="header__title-lower">Łomżyńskie Towarzystwo Opieki nad Zwierzętami</h2>
      </div>
      <div className="header__social">
        <a className="header__social-link" href="https://www.facebook.com/schroniskodlabezdomnychpsowlomza" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
      </div>
      <div className="header__request">
        <span className="header__request-text">Podaruj nam <strong> 1%</strong> KRS: <strong> 0000120679 </strong></span>
      </div>
    </div>
  );
}

export default Header;