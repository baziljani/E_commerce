import React, { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // Implement order submission logic here
    setOrderPlaced(true);
    setCart([]); // Clear the cart after placing the order
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {orderPlaced ? (
        <p>Your order has been successfully placed! Wait for our delivery.</p>
      ) : (
        <form onSubmit={handleOrderSubmit}>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Submit Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;