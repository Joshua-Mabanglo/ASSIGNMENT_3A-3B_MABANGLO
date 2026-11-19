import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = ({ cart, clearCart }) => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    shipAddr: "",
    zip: "",
  });
  const subtotal = cart.reduce(
    (total, album) => total + album.amount * album.price,
    0
  );
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  const onInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    setConfirmSubmit(true);
    clearCart();
  };

  if (confirmSubmit) {
    return (
      <div className="success-msg">
        <h3 className="success-title">Great selection, {data.fullName}! 🎺</h3>
        <p className="success-subtitle">
          Your order is on its way. You'll recieve a confirmation email at{" "}
          {data.email}. In the meantime, please browse our ever-growing
          selection:
        </p>
        <Link to="/" className="vault-btn">
          Return to Vault
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="nothing-msg">
        <h3 className="nothing-title">There is nothing in your cart.</h3>
        <Link to="/" className="vault-btn">
          Return to Vault
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Confirm Order and Checkout</h1>
      <div className="checkout-main">
        <form className="checkout-form" onSubmit={submitData}>
          <h2 className="form-title">Shipping Information</h2>
          <div className="form-group">
            <label htmlFor="fullName" className="group-label">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={data.fullName}
              onChange={onInput}
              className="group-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="group-label">
              Email *
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={onInput}
              className="group-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipAddr" className="group-label">
              Shipping Address *
            </label>
            <input
              type="text"
              name="shipAddr"
              id="shipAddr"
              value={data.shipAddr}
              onChange={onInput}
              className="group-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip" className="group-label">
              Zip Code *
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              pattern="[0-9]{5}"
              value={data.zip}
              onChange={onInput}
              className="group-input"
              required
            />
          </div>
          <button type="submit" className="form-btn">
            Confirm order (${total.toFixed(2)})
          </button>
        </form>
        <aside className="checkout-summary">
          <h2 className="summary-header">Order Summary</h2>
          <ul className="summary-entries">
            {cart.map((album) => (
              <li key={album.id} className="album-entries">
                <p className="album-entry">
                  {album.title} &times; {album.amount}
                </p>
                <p className="album-entry-price">
                  ${(album.price * album.amount).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="summary-calc">
            <div className="subtotal">
              <p className="subtotal-title">Subtotal:</p>
              <p className="subtotal-amount">${subtotal.toFixed(2)}</p>
            </div>
            <div className="tax">
              <p className="tax-title">Tax:</p>
              <p className="tax-amount">${tax.toFixed(2)}</p>
            </div>
          </div>
          <div className="summary-total">
            <h3 className="total-title">Total:</h3>
            <p className="total-amount">${total.toFixed(2)}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
