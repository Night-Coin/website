import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Private & Secure Transactions",
      description: "Built on Tari's implementation of the Mimblewimble protocol with addresses, ensuring all transactions are private, secure, and untraceable by default.",
      icon: "🔒"
    },
    {
      title: "Decentralized Network",
      description: "Starting with Proof of Work (PoW) and transitioning to Proof of Stake (PoS) for enhanced security. PoS prevents 51% attacks like the one Monero experienced with Qubic, especially when the coin price is high enough.",
      icon: "🌐"
    },
    {
      title: "Open Source",
      description: "Fully transparent codebase that anyone can review, audit, and contribute to.",
      icon: "📖"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Nightcoin?</h2>
          <p className="features-subtitle">
            Built on the principles of privacy, security, and decentralization
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;