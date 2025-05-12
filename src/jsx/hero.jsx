import React from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Fresh, Delicious Tacos on Wheels!</h1>
      <p>Serving authentic Mexican street food with a modern twist.</p>
      <Link to="/menu" className="cta-button">Order Now</Link>
    </section>
  );
}

export default Hero;
