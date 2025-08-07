import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Discover how we can help your business grow</p>
      </section>
      
      <section className="services-grid">
        <div className="service-card">
          <div className="service-icon">🚀</div>
          <h3>Web Development</h3>
          <p>Custom web applications built with modern technologies</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Mobile Development</h3>
          <p>Responsive mobile applications for iOS and Android</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>UI/UX Design</h3>
          <p>Beautiful and intuitive user interface designs</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>Performance Optimization</h3>
          <p>Speed and performance improvements for your applications</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
