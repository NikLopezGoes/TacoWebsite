import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Brand */}
        <div className="footer-section brand-area">
          <div className="footer-logo">
            <img className="footer-logoImg" src="/images/TacoGuy.png" alt="Taco Guy logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Kris' Tacos</span>
            <span className="brand-sub">Blue Earth, MN</span>
          </div>
        </div>

        {/* Center: Links */}
        <nav className="footer-section nav-area" aria-label="Footer">
          <Link to="/" className="f-link">Home</Link>
          <Link to="/menu" className="f-link">Menu</Link>
          <Link to="/calendar" className="f-link">Calendar</Link>
          <Link to="/contact" className="f-link">Contact</Link>
        </nav>

        {/* Right: Contact */}
        <div className="footer-section contact-area">
          <a href="mailto:tacomyfriend@gmail.com">tacomyfriend@gmail.com</a>
          <a href="tel:5075258243">(507) 525-8243</a>
        </div>
      </div>

      <div className="footer-bottom-line">
        <p>© {year} Kris' Tacos. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;