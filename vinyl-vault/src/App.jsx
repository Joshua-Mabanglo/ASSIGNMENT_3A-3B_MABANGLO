import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VaultPage from "./pages/VaultPage";
import AlbumPage from "./pages/AlbumPage";
import CartTab from "./components/CartTab";
import { Routes, Route } from "react-router-dom";

import { ALBUMS } from "./data/albums";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);

  const addToCart = (album, amount = 1) => {
    setCart((currCart) => {
      const exists = currCart.find((a) => a.id === album.id);
      if (exists) {
        return currCart.map((a) =>
          a.id === album.id ? { ...a, amount: a.amount + amount } : a
        );
      }
      return [...currCart, { ...album, amount }];
    });
    setCartOpen(true);
  };

  const updateCart = (albumId, update) => {
    setCart((currCart) =>
      currCart
        .map((a) => {
          if (a.id === albumId) {
            const updateAmt = a.amount + update;
            return updateAmt > 0 ? { ...a, amount: updateAmt } : null;
          }
          return a;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (albumId) => {
    setCart((currCart) => currCart.filter((a) => a.id !== albumId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, album) => total + album.amount, 0);

  return (
    <div className="app-container">
      <Navbar openCart={() => setCartOpen(true)} cartTotal={cartTotal} />
      <div className="app-body">
        <Routes>
          <Route
            path="/"
            element={<VaultPage albums={ALBUMS} addToCart={addToCart} />}
          />
          <Route
            path="/album/:albumId"
            element={<AlbumPage album={ALBUMS} addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} clearCart={clearCart} />}
          ></Route>
        </Routes>
      </div>
      <CartTab
        cart={cart}
        cartOpen={cartOpen}
        cartClose={() => {
          console.log("Clicked");
          setCartOpen(false);
        }}
        updateCart={updateCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
