import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homepage">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Kris' Tacos</h1>
                    <p className="hero-subtitle">Authentic Mexican Flavor, Straight from Blue Earth</p>
                    <Link to="/calendar" className="hero-button">Find the Truck</Link>
                    <Link to="/menu" className="menu-btn">View Menu</Link>
                </div>
            </section>

            <section className="about">
                <h2>Our Story</h2>
                <p>
                    Kris' Tacos is a family owned and operated food truck based in Blue Earth, Minnesota. The idea for the food truck was brought to 
                    life when we realized there was a need for authentic Mexican food in the community. The food truck has since made many appearances in the 
                    South Central Minnesota area. We serve traditional Mexican dishes made with fresh ingredients and authentic recipes.
                </p>
                <p>
                    Our food is made with quality ingredients and a lot of love. We take pride in serving delicious food that brings people together. You do not want to miss
                    anything! From our Tacos to our Tortas, we have something for everyone.
                </p>
                <p>
                    We would love to connect with the community and hear your feedback. Feel free to reach out to us through our <Link to="/contact">contact page</Link>! 
                    We also offer catering services for events of all sizes. Please check out our <Link to="/calendar">calendar</Link> to see where we will be next!
                </p>
            </section>
            <section className="contact-info">
            <h2>Contact Info</h2>
            <div className="contact-item">
                <strong>Email:</strong> <span>tacomyfriend@gmail.com</span>
            </div>
            <div className="contact-item">
                <strong>Phone:</strong> <span>(507) 525-8243</span>
            </div>
            </section>
        </div>
    );
}

export default HomePage;
