import React from 'react';
import "./Cart.css";

const Cart = ({ cart, removeFromCart, onClose }) => {
    return (
        <div className='cart'>
            <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button className="close-cart-button" onClick={onClose}>
        Close
      </button>
            
        </div>
    );
};

export default Cart;