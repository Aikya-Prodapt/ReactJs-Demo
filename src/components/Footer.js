import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              A modern React application built with best practices and responsive design.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a href="https://github.com" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} My React App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
