import React from 'react';
import './css/navBar.css'; // or a separate CSS file if needed

function NavBar() {
  return (
    <div className="navBar">
      <button className="homeButton">Home</button>
      <button className="menuButton">Menu</button>
      <button className="contactButton">Contact</button>
      <button className="aboutButton">About</button>
    </div>
  );
}

export default NavBar;
