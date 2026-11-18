import React from "react";
import { Link, useParams } from "react-router-dom";

const AlbumPage = ({ album, addToCart }) => {
  const { albumId } = useParams();
  const pickedAlbum = album.find((a) => a.id === albumId);

  return (
    <section className="album-page">
      <p className="breadcrumb-link">
        <Link to="/">Vault</Link> → {pickedAlbum.title}
      </p>

      <div className="album-main">
        <img
          src={pickedAlbum.image}
          alt={pickedAlbum.title}
          className="album-main-img"
        />
        <div className="album-main-text">
          <div className="album-main-header">
            <p className="album-main-genre">{pickedAlbum.genre}</p>
            <h3 className="album-main-title">{pickedAlbum.title}</h3>
            <p className="album-main-price">{`$${pickedAlbum.price}`}</p>
          </div>
          <p className="album-main-desc">{pickedAlbum.description}</p>

          <p className="album-main-stock">
            {pickedAlbum.stock > 0
              ? `👍 In stock (${pickedAlbum.stock} units available)`
              : "🚫 Out of stock"}
            <button
              type="button"
              className="album-main-btn"
              onClick={() => addToCart(pickedAlbum)}
            >
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlbumPage;
