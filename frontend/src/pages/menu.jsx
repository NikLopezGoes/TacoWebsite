import '../css/menu.css';
import React, { useState, useEffect } from 'react';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simulating a fetch call to get menu items
    const fetchMenuItems = async () => {
      // In a real application, you would replace this with an API call
      const items = [
        { id: 1, name: 'Tacos', price: '$12' },
        { id: 2, name: 'Burrito', price: '$12' },
        { id: 3, name: 'Nachos Grande', price: '$12' },
        { id: 4, name: 'Quesadilla', price: '$12' },
      ];
      setMenuItems(items);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="menu-container">
      <h1>Menu</h1>
    </div>
  );
}


export default MenuPage;