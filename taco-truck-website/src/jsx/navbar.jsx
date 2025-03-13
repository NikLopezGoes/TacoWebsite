import React from 'react';
import '../css/navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Taco My Friend?</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
