import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/home" className="footer-link">Home</Link>
          <Link to="/menu" className="footer-link">Menu</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/calendar" className="footer-link">Calendar</Link>
        </div>
        <div className="footer-section footer-contact">
          <p>Email: <a href="mailto:tacomyfriend@gmail.com">tacomyfriend@gmail.com</a></p>
          <p>Phone: (507) 399 6708</p>
        </div>
        <div className="footer-section footer-bottom">
          <p>© 2025 Kris Tacos</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
