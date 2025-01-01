import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="price">${product.price}</p>
            <div className="product-buttons">
              <Link to={`/readmore/${product.id}`} className="button">Read More</Link>
              <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;