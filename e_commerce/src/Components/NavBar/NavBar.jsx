import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import { AuthContext } from '../Login/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchQuery}`);
  };

  return (
    <div className="navbar">
      <Link to="/" className='left'>J Store <i className="fa-solid fa-store"></i></Link>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button"><i className="fa fa-search"></i></button>
      </form>
      {user ? (
        <span className='right'>Welcome, {user.name || user.email}</span>
      ) : (
        <Link to="/login" className='right'>Login</Link>
      )}
      <Link to="/cart" className='right'>Cart ({cart.length}) <i className="fa-solid fa-cart-shopping"></i></Link>
    </div>
  );
};

export default NavBar;