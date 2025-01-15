import React from 'react';
import { useItemContext } from '../context/ItemContext'; // Corrected import
import '../style/productItem.css'; // Importing productItem CSS

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useItemContext(); // Using context hook

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: {product.price} Rs/Kg</p>
        <div className="product-actions">
          <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <button className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
