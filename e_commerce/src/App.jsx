import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import ReadMore from './Components/ReadMore/ReadMore';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import { CartProvider } from './Components/Cart/CartContext';
import { AuthProvider } from './Components/Login/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/readmore/:id" element={<ReadMore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;