import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useItemContext } from '../context/ItemContext'; // Corrected import
import '../style/header.css'; // Importing header CSS

const Header = () => {
  const { itemsInCart, totalPrice } = useItemContext(); // Using context hook directly

  return (
    <div className="header">
      <div className="header-container">
        <h1 className="logo">GFG Fruit & Vegetable Market</h1>
        <h3 style={{ color: 'green', marginTop: '5px' }}>Total Price: {totalPrice} Rs</h3>
      </div>
      <div className="cart-container">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} size="3x" />
          <span className="cart-count">{itemsInCart}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
