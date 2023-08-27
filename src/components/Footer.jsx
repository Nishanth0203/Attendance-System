import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>Attendance System</span>
        </div>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
