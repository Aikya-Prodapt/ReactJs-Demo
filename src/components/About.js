import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing innovative solutions that make a difference in people's lives.
            Our team is passionate about creating technology that is both powerful and accessible.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation and creativity</li>
            <li>Customer-first approach</li>
            <li>Quality and excellence</li>
            <li>Continuous learning</li>
          </ul>
        </div>
        
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our diverse team brings together years of experience and expertise from various fields,
            united by our commitment to excellence and customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
