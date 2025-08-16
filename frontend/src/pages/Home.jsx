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
            <section className="contact-info">
            <h2>Contact Info</h2>
            <div className="contact-item">
                <strong>Email:</strong> <span>taco@myfriend.com</span>
            </div>
            <div className="contact-item">
                <strong>Phone:</strong> <span>(507) 525-8243</span>
            </div>
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
