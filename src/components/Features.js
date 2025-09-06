import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Private Transactions",
      description: "All transactions are private by default. Your financial activity remains confidential and untraceable.",
      icon: "🔒"
    },
    {
      title: "Decentralized Network",
      description: "No central authority controls the network. It's maintained by a distributed community of users.",
      icon: "🌐"
    },
    {
      title: "Secure & Untraceable",
      description: "Advanced cryptographic techniques ensure your transactions cannot be linked to your identity.",
      icon: "🛡️"
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
          <h2 className="features-title">Why Choose CryptoSecure?</h2>
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