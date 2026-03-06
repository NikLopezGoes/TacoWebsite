import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text-wrapper">
                        <h1 className="hero-title">Kris' Tacos</h1>
                        <div className="hero-divider"></div>
                        <p className="hero-subtitle">Authentic Mexican Flavor, Straight from Blue Earth</p>
                    </div>
                    <div className="hero-buttons">
                        <Link to="/calendar" className="hero-button primary">Find the Truck</Link>
                        <Link to="/menu" className="hero-button secondary">View Menu</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">🌮</div>
                    <h3>Authentic Recipes</h3>
                    <p>Traditional Mexican dishes made with fresh ingredients</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">👨‍👩‍👧‍👦</div>
                    <h3>Family Owned</h3>
                    <p>Made with quality ingredients and a lot of love</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📍</div>
                    <h3>South Central MN</h3>
                    <p>Serving communities throughout the region</p>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="about-content">
                    <h2 className="section-title">Our Story</h2>
                    <div className="about-text">
                        <p className="lead">
                            Kris' Tacos is a family owned and operated food truck based in Blue Earth, Minnesota. The idea for the food truck was brought to 
                            life when we realized there was a need for authentic Mexican food in the community. The food truck has since made many appearances in the 
                            South Central Minnesota area. We serve traditional Mexican dishes made with fresh ingredients and authentic recipes.
                        </p>
                        <p>
                            Our food is made with quality ingredients and a lot of love. We take pride in serving delicious food that brings people together. You do not want to miss
                            anything! From our Tacos to our Tortas, we have something for everyone.
                        </p>
                        <p>
                            We would love to connect with the community and hear your feedback. Feel free to reach out to us through our <Link to="/contact" className="inline-link">contact page</Link>! 
                            We also offer catering services for events of all sizes. Please check out our <Link to="/calendar" className="inline-link">calendar</Link> to see where we will be next!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-info">
                <div className="contact-card">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-items">
                        <div className="contact-item">
                            <span className="contact-label">Email</span>
                            <a href="mailto:tacomyfriend@gmail.com" className="contact-value">tacomyfriend@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Phone</span>
                            <a href="tel:5075258243" className="contact-value">(507) 525-8243</a>
                        </div>
                    </div>
                    <Link to="/contact" className="contact-button">Contact Us</Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
