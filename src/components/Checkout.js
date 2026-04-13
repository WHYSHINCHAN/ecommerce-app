import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    // Simulate payment transaction
    setTimeout(() => {
      setIsProcessing(false);
      // Simulate random failure (20% chance)
      if (Math.random() < 0.2) {
        setPaymentError('Payment Failure: Your card was declined or has insufficient funds.');
      } else {
        setPlaced(true);
        if (clearCart) clearCart();
      }
    }, 1500);
  };

  if (placed) {
    return (
      <div className="success-container center-content">
        <div className="confetti-icon">🎉</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with us. Your items will be shipped soon.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Return to Store</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container center-content">
        <h2>Your Cart is Empty</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Start Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="page-title">Checkout</h2>
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h3>Shipping Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" required placeholder="123 Main St" />
          </div>
          <div className="form-group row">
            <div className="col">
              <label>City</label>
              <input type="text" required placeholder="Metropolis" />
            </div>
            <div className="col">
              <label>Postal Code</label>
              <input type="text" required placeholder="10001" />
            </div>
          </div>
          <h3>Payment Method</h3>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" required />
          </div>
          
          {paymentError && (
            <div className="auth-error mt-2">
              <strong>Transaction Error:</strong> {paymentError}
            </div>
          )}

          <button type="submit" className="btn-primary full-width mt-2" disabled={isProcessing}>
            {isProcessing ? 'Processing Payment...' : 'Place Order'}
          </button>
        </form>
        
        <div className="cart-summary sticky-summary">
          <h3>Order Total</h3>
          {cart.map(item => (
            <div className="summary-row text-sm" key={item.id}>
              <span>{item.title} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
