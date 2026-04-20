import { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__left">
          <img src={logo} alt="logo" className="header__logo" />

          <nav className="header__nav">
            <a href="#">Product</a>
            <a href="#">Features</a>
            <a href="#">Marketplace</a>
            <a href="#">Company</a>
          </nav>
        </div>

        <div className="header__right">
          <a href="#" className="header__login">Log in</a>
          <button className="header__cta">Start free trial</button>
        </div>

        <button
          className="header__menu-button"
          aria-label="Open menu"
          onClick={openMenu}
        >
          <img src={menuIcon} alt="" />
        </button>
      </header>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'mobile-menu-overlay--open' : ''}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu-drawer ${isMenuOpen ? 'mobile-menu-drawer--open' : ''}`}>
        <div className="mobile-menu-drawer__header">
          <img src={logo} alt="logo" className="mobile-menu-drawer__logo" />
          <button
            className="mobile-menu-drawer__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <nav className="mobile-menu-drawer__nav">
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">Marketplace</a>
          <a href="#">Company</a>
        </nav>

        <button className="mobile-menu-drawer__cta">Start free trial</button>

        <div className="mobile-menu-drawer__login-row">
          Existing customer? <a href="#">Login</a>
        </div>
      </div>
    </>
  );
};

export default Header;