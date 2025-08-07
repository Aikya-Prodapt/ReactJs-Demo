import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My React App</h1>
          <p className="hero-subtitle">
            A modern, responsive web application built with React and best practices
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Performance</h3>
              <p>Built with React for optimal speed and efficiency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Works perfectly on all devices and screen sizes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern UI</h3>
              <p>Clean and intuitive user interface design</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of users who trust our platform</p>
          <button className="btn btn-large">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
