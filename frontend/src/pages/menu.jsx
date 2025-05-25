import '../css/menu.css';
import React, { useState, useEffect } from 'react';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  const SQUARE_ACCESS_TOKEN = import.meta.env.VITE_SQUARE_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMenuFromSquare = async () => {
      try {
        const response = await fetch(
          'https://connect.squareup.com/v2/catalog/list?types=ITEM',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${SQUARE_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
              'Square-Version': '2024-05-15',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const items = data.objects || [];
        setMenuItems(items);
      } catch (err) {
        console.error('Error fetching from Square:', err);
        setError('Failed to load menu');
      }
    };

    fetchMenuFromSquare();
  }, []);

  return (
    <div className="menu-container">
      <h1>Menus</h1>
      {error && <p>{error}</p>}
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span className="item-name">{item.item_data.name}</span><br />
            <span className="item-description">{item.item_data.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
