import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="cart-item-image" />
            <p className="cart-item-description">{product.description}</p>
            <p>${product.price}</p>
            <button className="button" onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;