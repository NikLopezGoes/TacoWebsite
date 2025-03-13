import React from 'react';
import '../css/hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Fresh, Delicious Tacos on Wheels!</h1>
      <p>Serving authentic Mexican street food with a modern twist.</p>
      <a href="#menu" className="cta-button">Order Now</a>
    </section>
  );
}

export default Hero;
