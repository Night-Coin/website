import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-shield">
              <span className="logo-text">C</span>
            </div>
            <span className="brand-name">CryptoSecure</span>
          </div>
          
          <nav className="nav">
            <a href="#get-started" className="nav-link">Get Started</a>
            <a href="#downloads" className="nav-link">Downloads</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#resources" className="nav-link">Resources</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;