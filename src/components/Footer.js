import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-shield">
                <span className="logo-text">C</span>
              </div>
              <span className="brand-name">CryptoSecure</span>
            </div>
            <p className="footer-description">
              Privacy-focused cryptocurrency for secure, untraceable transactions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Community</h4>
            <ul className="footer-links">
              <li><a href="#forum">Forum</a></li>
              <li><a href="#reddit">Reddit</a></li>
              <li><a href="#telegram">Telegram</a></li>
              <li><a href="#discord">Discord</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Development</h4>
            <ul className="footer-links">
              <li><a href="#github">GitHub</a></li>
              <li><a href="#contributing">Contributing</a></li>
              <li><a href="#bug-reports">Bug Reports</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 CryptoSecure. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#license">License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;