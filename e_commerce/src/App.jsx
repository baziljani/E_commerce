import React from 'react'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/Cart/Cart'
import ReadMore from './Components/ReadMore/ReadMore'
import { CartProvider } from './Components/Cart/CartContext';
import { AuthProvider } from './Components/Login/AuthContext';
import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          <Route path="/readmore/:id" element={<ReadMore />} />
        </Routes>
          </BrowserRouter>
          </AuthProvider>
        </CartProvider>
    </div>
  );
};

export default App