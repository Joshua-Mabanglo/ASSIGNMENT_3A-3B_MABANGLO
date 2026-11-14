import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <Link className="album-img-link" to="/">
        <img src={album.image} alt={album.title} className="album-img" />
      </Link>
      <section className="album-info">
        <p className="album-genre">{album.genre}</p>
        <h3 className="album-title">
          <Link className="album-title-link" to="/">
            {album.title}
          </Link>
        </h3>
        <p className="album-price">{album.price}</p>
        <button type="submit" className="album-btn">
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default AlbumCard;
