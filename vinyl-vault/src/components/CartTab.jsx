import React from "react";
import { useNavigate } from "react-router-dom";

const CartTab = ({ cart, cartOpen, cartClose, cartUpdate, removeFromCart }) => {
  if (!cartOpen) {
    return null;
  }

  const subtotal = cart.reduce(
    (sum, album) => sum + album.amount * album.price,
    0
  );
  return (
    <aside className="cart-bg" onClick={cartClose}>
      <div className="cart-tab" onClick={(e) => e.stopPropagation()}>
        <div className="tab-header">
          <h2 className="tab-title">🛒 Cart ({cart.length})</h2>
          <button className="close-btn" onClick={cartClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="tab-main">
          {cart.length === 0 ? (
            <div className="empty-msg">Your cart is empty. 🎶</div>
          ) : (
            <ul className="cart-list">
              {cart.map((album) => (
                <li key={album.id} className="cart-item">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="item-img"
                  />
                  <div className="cart-info">
                    <p className="item-title">{album.title}</p>
                    <p className="item-price">
                      {(album.amount * album.price).toFixed(2)}
                    </p>
                    <div className="amount-controls">
                      <div className="update-album">
                        <button
                          type="button"
                          className="add-item"
                          onClick={() => cartUpdate(album.id, 1)}
                        >
                          <span>+</span>
                        </button>
                        <p className="item-amount">{album.amount}</p>
                        <button
                          type="button"
                          className="subtract-item"
                          onClick={() => cartUpdate(album.id, -1)}
                        >
                          <span>-</span>
                        </button>
                      </div>
                      <div className="delete-album">
                        <button
                          className="remove-item"
                          type="button"
                          onClick={() => removeFromCart(album.id)}
                        >
                          Delete 🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <div className="tab-footer">
            <div className="pay-row">
              <p className="pay-title">You Pay: </p>
              <p className="pay-value">${subtotal.toFixed(2)}</p>
            </div>
            <button className="checkout-btn" type="button">
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CartTab;
