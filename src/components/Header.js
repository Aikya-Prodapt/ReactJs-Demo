import React from 'react';
import './Header.css';
// import Login from './Login.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="app-title">My React App</h1>
        </div>
        <nav className="main-navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
           
          </ul>
        </nav>
        
        <div className="header-actions">
          <Link className="cta-button" to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
