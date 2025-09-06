import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Nightcoin Means <span className="highlight">Privacy</span>
          </h1>
          <p className="hero-subtitle">
            A privacy-focused cryptocurrency that provides secure, private, and untraceable transactions. 
            Built on the principles of decentralization and confidentiality.
          </p>
          <div className="hero-actions">
            <a href="#get-started" className="btn btn-primary">Get Started</a>
            <a href="#downloads" className="btn btn-secondary">Choose a Wallet</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;