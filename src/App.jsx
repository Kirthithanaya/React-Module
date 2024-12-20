import React, { useEffect, useState } from 'react';
import Products from './Components/Products';
import Cart from './Components/Cart';
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
   // Fetch products from Fake Store API
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
   },[]);
   // Add product to cart
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='app'>
      <header className="header">
        <h1 className="logo"> 🛒E-Shop</h1>
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          {showCart ? "Close Cart" : `Cart (${cart.length})`}
        </button>
      </header>

      <div className="main-content">
        <Products products={products} addToCart={addToCart} />
        {showCart && (
          <Cart cart={cart} removeFromCart={removeFromCart} onClose={() => setShowCart(false)} />
        )}
      </div>
      
    </div>
  );
};

export default App;