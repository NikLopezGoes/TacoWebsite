import "../css/menu.css";
import React, { useState, useEffect } from "react";

function MenuPage() {
const menuItems = [
  {
    name: 'Burrito',
    description: 'Packed with rice, beans, cheese, lettuce, pico de gallo, tomato, and your choice of meat: chicken, steak (+$1), or al pastor.',
    price: 'Chicken/Al Pastor: $12.00 | Steak: $13.00',
    image: '/images/burrito.jpg',
  },
  {
    name: 'Street Corn',
    description: 'Grilled corn on the cob smothered in mayo, cotija cheese, chili powder, and lime juice. Classic Mexican elote style!',
    price: '$5.00',
    image: '/images/corn.jpg',
  },
  {
    name: 'Nachos',
    description: 'Crispy tortilla chips topped with cheese, beans, fresh veggies, and your choice of meat: chicken, steak, or al pastor. ',
    price: '$12.00',
    image: '/images/nachos.jpg',
  },
  {
    name: 'Potato',
    description: 'Golden fried spiral potato with the option to add ketchup and sour cream!',
    price: '$4.00',
    image: '/images/spiralpotato.png',
  },
  {
    name: 'Quesadilla',
    description: 'Large grilled tortilla filled with melty cheese and your choice of chicken, steak, or al pastor. Served hot and crispy.',
    price: '$10.00',
    image: '/images/quesadilla.jpg',
  },
  {
    name: 'Street Tacos (4 count)',
    description: 'Four authentic tacos with your choice of meat (chicken, steak, al pastor). Chicken comes with lettuce, tomato, sour cream & cheese. Steak and al pastor come with onion & lettuce.',
    price: '$10.00',
    image: '/images/taco.jpg',
  },
  {
    name: 'Street Taco (1 count)',
    description: 'Single taco made to order with your choice of meat and toppings as above. Great for tasting or adding to your meal.',
    price: '$3.00',
    image: '/images/taco.jpg',
  },
  {
    name: 'Torta',
    description: 'A Mexican sandwich on fresh bread with beans, queso fresco, lettuce, mayo, mustard, jalapeños (optional), and your choice of meat.',
    price: '$12.00',
    image: '/images/torta.jpeg',
  },
  {
    name: 'Magonada',
    description: 'A sweet and spicy mango treat with chamoy, Tajín, and tamarind candy. A fan-favorite refresher!',
    price: '$5.00',
    image: '/images/mangonada.jpeg',
  },
  {
    name: 'Soda',
    description: 'Ice-cold canned sodas to pair with your meal. Choose from a variety of flavors.',
    price: '$2.50',
    image: '/images/soda.jpeg',
  },
  {
    name: 'Quesabirria Tacos (3 count)',
    description: 'Rich and cheesy beef birria tacos grilled to perfection, served with a side of warm consommé for dipping.',
    price: '$13.00',
    image: '/images/birria.jpeg',
  },
];


  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, idx) => (
          <div className="menu-card" key={idx}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
