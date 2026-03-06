import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

function HomePage() {
    return (
        <div className="homepage">
            {/* Hero Section using your custom photo */}
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <p className="hero-eyebrow">Blue Earth, Minnesota</p>
                        <h1 className="hero-title">Kris' Tacos</h1>
                        <div className="hero-divider"></div>
                        <p className="hero-tagline">Authentic Mexican Flavor, Straight from Blue Earth</p>
                        <div className="hero-buttons">
                            <Link to="/calendar" className="btn btn-primary">Find the Truck</Link>
                            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Selling Points */}
            <section className="home-section features">
                <div className="section-header">
                    <p className="section-kicker">Why people come back</p>
                    <h2 className="section-title">Fresh, fast, and full of flavor</h2>
                    <p className="section-subtitle">Family recipes, quality ingredients, and a menu built for taco lovers.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-item">
                        <div className="icon-pill" aria-hidden="true">🌮</div>
                        <h3>Fresh & Authentic</h3>
                        <p>Traditional family recipes passed down through generations.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-pill" aria-hidden="true">❤️</div>
                        <h3>Family Owned</h3>
                        <p>Made with quality ingredients and a lot of love.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-pill" aria-hidden="true">📍</div>
                        <h3>South Central MN</h3>
                        <p>Serving Blue Earth and communities throughout the region.</p>
                    </div>
                </div>
            </section>

            {/* Menu Preview Section */}
            <section className="home-section menu-preview">
                <div className="section-header">
                    <p className="section-kicker">Fan favorites</p>
                    <h2 className="section-title">Popular picks</h2>
                    <p className="section-subtitle">A few staples you’ll see people ordering again and again.</p>
                </div>
                <div className="preview-grid">
                    <div className="preview-card">
                        <h4>Street Tacos</h4>
                        <p>Authentic corn tortillas with cilantro, onions, and your choice of meat.</p>
                    </div>
                    <div className="preview-card">
                        <h4>Loaded Tortas</h4>
                        <p>Mexican sandwiches toasted to perfection with fresh ingredients.</p>
                    </div>
                    <div className="preview-card">
                        <h4>Daily Specials</h4>
                        <p>From Quesabirria to seasonal favorites—check what's on the grill!</p>
                    </div>
                </div>
                <div className="menu-cta">
                    <Link to="/menu" className="text-link">See Full Menu →</Link>
                </div>
            </section>

            {/* Our Story / About */}
            <section className="home-section about-section">
                <div className="about-container">
                    <div className="section-header">
                        <p className="section-kicker">Our story</p>
                        <h2 className="section-title">From our family to yours</h2>
                    </div>
                    <div className="about-text">
                        <p>
                            Kris' Tacos is a family owned and operated food truck based in Blue Earth, Minnesota. 
                            We realized there was a need for authentic Mexican food in our community, 
                            and we've been hitting the road ever since.
                        </p>
                        <p>
                            Every plate is made with quality ingredients and a whole lot of heart. 
                            We take pride in bringing people together over delicious, traditional meals.
                        </p>
                        <Link to="/contact" className="btn btn-outline">Inquire About Catering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;