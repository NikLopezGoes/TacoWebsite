import React from 'react';
import '../css/navBar.css'; // or a separate CSS file if needed
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/home" className="homeButton">Home</Link>
      <Link to="/menu" className="menuButton">Menu</Link>
      <Link to="/contact" className="contactButton">Contact</Link>
      {/* <Link to="/about" className="aboutButton">About</Link> */}
      <Link to="/calendar" className="calendarButton">Calendar</Link>
    </nav>  
  );
}

export default NavBar;
