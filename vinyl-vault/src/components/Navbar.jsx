import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="site-title">
        <Link className="title-text" to="/">
          🎵 VinylVault
        </Link>
      </div>
      <nav className="site-navbar">
        <Link className="vault-link" to="/">
          Vault
        </Link>
        <button type="button" className="cart-btn" aira-label="cart">
          🛒 Cart
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
