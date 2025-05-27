import '../css/home.css';
import React, { useState, useEffect } from 'react';


function HomePage() {
    return (
    <div className="homepage-content">
        <h1>Welcome to Kris' Tacos 🌮</h1>
        <h2>Authentic Mexican Flavor, Straight from Blue Earth</h2>
        <p>
            Kris' Tacos is a family-owned taco truck proudly serving the community of Blue Earth, Minnesota and the surrounding areas. 
            Our recipes come straight from our Mexican roots—passed down through generations and cooked with love, 
            care, and bold, unforgettable flavor.
        </p>
        <p>
            From sizzling carne asada tacos to massive chicken burritos, everything we serve is prepared with 
            authentic ingredients and traditions that bring a true taste of Mexico to southern Minnesota. 
            We're not just a taco truck—we're a little piece of home, on wheels.
        </p>
        <p>
            Whether you're a regular or a first-time guest, we welcome you like family. So come grab a bite, 
            share a story, and taste the difference that heritage, heart, and homemade food can make.
        </p>

        <h3>What We’re Serving</h3>
        <ul>
            <li>🌮 Authentic street tacos with your choice of meats and fresh toppings</li>
            <li>🌯 Burritos filled with flavor</li>
            <li>🧀 Quesadillas made to order</li>
            <li>🥑 Homemade salsas, refreshing drinks and so much more</li>
        </ul>

        <p>
            📍 Based in Blue Earth, MN — check our <a href="/calendar">calendar</a> to see where we’re parked next!
        </p>

        <p>
            Gracias for supporting local. We can’t wait to serve you.
        </p>
    </div>
    );
}

export default HomePage;
