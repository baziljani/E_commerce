import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { AuthContext } from '../Login/AuthContext';
import './Cart.scss';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleBuyNow = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{product.title}</h2>
              <p className="cart-item-description">{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
            <div className="cart-item-actions">
              <button className="button remove-button" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <button className="button buy-now" onClick={handleBuyNow}>Buy Now</button>
      )}
    </div>
  );
};

export default Cart;