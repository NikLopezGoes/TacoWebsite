import React from 'react';
import '../css/aboutUs.css'; // Ensure styling
import tacoTruck from '../img/TacoGuy.png';  // Importing image

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
      <img src={tacoTruck} alt="Taco Truck" className="about-image" />
        <p>
          We are a family-owned taco truck bringing the flavors of Mexico to your neighborhood.
          Our passion for authentic cooking drives us to serve the best tacos, tortas, and more,
          made fresh daily with local ingredients.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
