import React, { useState } from "react";

import "./movieDisplay.css";

function MovieDisplay({ movie }) {
  const [stock, setStock] = useState(movie.numOfCopies);
  const [showMore, setShowMore] = useState(false);

  const addInv = stock + 1;
  const subInv = stock - 1;

  // todo: set function to subtract from numOfCopies when clicked, then set conditional incase out of stock
  const addToCart = () => {
    if (stock === 0) {
      setStock(0);
    } else {
      setStock(subInv);
    }
  };

  const removeFromCart = () => {
    if (stock === 5) {
      setStock(5);
    } else {
      setStock(addInv);
    }
  };

  return (
    <div className="col cover-border text-center">
      <h3 className="movie-title">{movie.title}</h3>
      <img src={movie.img} alt="movie-cover" className="movie-cover" />
      <p className="movie-price">${movie.price}/night</p>
      <p>{`Number of copies in stock: ${stock}`}</p>
      <p
        className="description-label"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Hide Description" : "Click for Description" }
      </p>
      <div className="desc-text">{showMore ? movie.description : ""}</div>
      <div className="button-regulations">
        <button className="btn btn-primary movieCartAdd" onClick={addToCart}>
          Add
        </button>
        <button
          className="btn btn-danger movieCartSub"
          onClick={removeFromCart}
        >
          Remove
        </button>
        <button
          className="btn btn-danger movieCartFav"
          onClick={removeFromCart}
        >
          Fav +
        </button>
      </div>
    </div>
  );
}

export default MovieDisplay;
