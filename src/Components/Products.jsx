import React from 'react';
import "./Products.css";

const Products = ({ products, addToCart }) => {
    return (
        <div className='products-container'>
            {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button className="add-button" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}
            
        </div>
    );
};

export default Products;