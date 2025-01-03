import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            J Store is your one-stop shop for all your needs. We offer a wide range of products at the best prices.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: support@jstore.com</p>
          <p>Phone: +91 9791789497</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} J Store | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;