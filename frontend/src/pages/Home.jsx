import React from 'react';
import '../css/home.css';

function HomePage() {
    return (
        <div className="homepage">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Kris' Tacos</h1>
                    <p className="hero-subtitle">Authentic Mexican Flavor, Straight from Blue Earth</p>
                    <a href="/calendar" className="hero-button">Find the Truck</a>
                    <a href="/menu" className="menu-btn">View Menu</a>
                </div>
            </section>

            <section className="about">
                <h2>Our Story</h2>
                <p>
                    Kris' Tacos is a family-owned taco truck proudly serving Blue Earth, Minnesota and the surrounding areas.
                    Our recipes come straight from our Mexican roots—passed down through generations and cooked with love, care, and bold flavor.
                </p>
                <p>
                    From sizzling carne asada tacos to massive chicken burritos, everything is prepared with authentic ingredients
                    and techniques that bring a true taste of Mexico to southern Minnesota.
                </p>
                <p>
                    Whether you're a regular or just stopping by, we welcome you like family. Come grab a bite and taste the difference.
                </p>
            </section>

            <section className="menu-preview">
                <h2>What We’re Serving</h2>
                <ul>
                    <li>Street tacos with your choice of meats and fresh toppings</li>
                    <li>Burritos filled with flavor</li>
                    <li>Quesadillas made to order</li>
                    <li>Homemade salsas, refreshing drinks, and more</li>
                </ul>
            </section>

            <section className="location-note">
                <p>
                    Based in Blue Earth, MN — check our <a href="/calendar">calendar</a> to see where we’re parked next!
                </p>
                <p>
                    We can’t wait to serve you!
                </p>
            </section>
        </div>
    );
}

export default HomePage;
