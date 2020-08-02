import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Header.scss';

class Header extends React.Component {
  state = {
    showNav: false,
  }

  handleShowMenu = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  render() {
    return (
      <div className='header'>
        <Navigation
          showNav={this.state.showNav}

        />
        <div
          className={this.state.showNav ? "header__menu-btn header__menu-btn--close" : "header__menu-btn"}
          onClick={this.handleShowMenu}
        >
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
          <span className="header__request-text">Podaruj nam <strong className="header__request-text--mark"> 1%</strong > KRS: <strong className="header__request-text--mark"> 0000120679 </strong></span>
        </div>
      </div>
    );
  }
}

export default Header;