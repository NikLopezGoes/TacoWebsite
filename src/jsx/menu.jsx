import React from "react";
import "../css/menu.css";

function Menu() {
  return (
    <section className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="/images/tacos.jpg" alt="Tacos" />
          <h3>Tacos</h3>
          <p>Delicious street tacos with your choice of filling.</p>
        </div>
        <div className="menu-item">
          <img src="/images/burritos.jpg" alt="Burritos" />
          <h3>Burritos</h3>
          <p>Stuffed burritos packed with flavor.</p>
        </div>
        <div className="menu-item">
          <img src="/images/tortas.jpg" alt="Tortas" />
          <h3>Tortas</h3>
          <p>Mexican sandwiches with fresh ingredients.</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
