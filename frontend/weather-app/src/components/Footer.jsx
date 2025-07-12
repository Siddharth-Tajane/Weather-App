// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-2 bg-light text-center border-top">
        <div className="container d-flex flex-column align-items-center">
          <div className="footer-content text-muted small text-center mb-1">
           <b> &copy; 2025 Weather App. All rights reserved by Siddharth.</b>
          </div>
          <a
            href="tel:+7219676792"
            className="text-decoration-none text-muted contact-link"
            title="Call Siddharth"
          >
            📞<b> Call Developer</b>
          </a>
        </div>
      </footer>
  );
};

export default Footer;
