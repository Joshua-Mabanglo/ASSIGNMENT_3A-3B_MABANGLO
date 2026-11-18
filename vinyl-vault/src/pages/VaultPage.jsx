import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AlbumCard from "../components/AlbumCard";

const VaultPage = ({ albums, addToCart }) => {
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];

  const [genre, setGenre] = useState("All");

  const albumList = albums || [];

  const filteredAlbums =
    genre === "All" ? albumList : albumList.filter((a) => a.genre === genre);

  return (
    <div className="vault-page">
      <div className="vault-header">
        <h2 className="vault-title">Find Your Greatest Hits</h2>
        <p className="vault-subtitle">Timeless music for every taste.</p>
      </div>

      <div className="album-grid">
        {filteredAlbums.map((a) => (
          <AlbumCard key={a.id} album={a} addToCart={addToCart} />
        ))}
      </div>

      {/* Why not working? */}
      {/* <div className="genre-filters">
        {genres.map((g) => {
          <button
            type="button"
            className={`filter ${genre === g ? "-select" : ""}`}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>;
        })}
      </div> */}
    </div>
  );
};

export default VaultPage;
