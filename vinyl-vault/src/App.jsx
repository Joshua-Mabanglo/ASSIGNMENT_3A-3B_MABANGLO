import React from "react";
import Navbar from "./components/Navbar";
import VaultPage from "./pages/VaultPage";
import { Routes, Route } from "react-router-dom";

import { ALBUMS } from "./data/albums";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<VaultPage albums={ALBUMS} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
