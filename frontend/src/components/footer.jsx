import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo" aria-hidden="true">KT</div>
            <div className="footer-brandText">
              <div className="footer-brandName">Kris' Tacos</div>
              <div className="footer-tagline">Authentic Mexican Flavor, Straight from Blue Earth</div>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-section footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/menu" className="footer-link">Menu</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/calendar" className="footer-link">Calendar</Link>
            </div>

            <div className="footer-section footer-contact">
              <h4 className="footer-heading">Contact</h4>
              <p>
                <span className="footer-muted">Email</span><br />
                <a className="footer-link" href="mailto:tacomyfriend@gmail.com">tacomyfriend@gmail.com</a>
              </p>
              <p>
                <span className="footer-muted">Phone</span><br />
                <a className="footer-link" href="tel:5075258243">(507) 525-8243</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Kris' Tacos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
