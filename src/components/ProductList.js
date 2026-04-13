import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="loader"><div></div><div></div><div></div></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-list-container">
      <h2 className="section-title">Discover Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
            <div className="product-card-overlay">View Details</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
