import React from 'react';
import '../css/menu.css';

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Tacos" /> {/* Placeholder image */}
          <h3>Tacos</h3>
          <p>Classic street tacos with your choice of filling.</p>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Burritos" />
          <h3>Burritos</h3>
          <p>Stuffed burritos bursting with flavor.</p>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Tortas" />
          <h3>Tortas</h3>
          <p>Grilled Mexican sandwiches with tasty fillings.</p>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Quesadillas" />
          <h3>Quesadillas</h3>
          <p>Crispy quesadillas with melted cheese and more.</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
