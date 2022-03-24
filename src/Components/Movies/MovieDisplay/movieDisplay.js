import React, { useState } from "react";

import "./movieDisplay.css";

function MovieDisplay({ movie }) {
  const [stock, setStock] = useState(movie.numOfCopies);
  const [showMore, setShowMore] = useState(false);

  const addInv = stock + 1;
  const subInv = stock - 1;
  const cart = [];

  // todo: set function to subtract from numOfCopies when clicked, then set conditional incase out of stock
  const addToFav = () => {
    console.log('added to favs')
  };

  const addToCart = (movieId) => {
    const movieCopy = { ...movie }
    movieCopy[movieId] = movieCopy[movieId] + 1 || 1;
    
  }

  const removeStock = () => {
    if (stock === 0) {
      setStock(0);
    } else {
      setStock(subInv);
    }
  }

  const addStock = () => {
    if (stock === 5) {
      setStock(5);
    } else {
      setStock(addInv);
    }
  };

  return (
    <div className="col cover-border text-center">
      <h3 className="movie-title ">{movie.title}</h3>
      <img src={movie.img} alt="movie-cover" className="movie-cover" />
      <p className="movie-price">${movie.price}/night</p>
      {stock ? `Number of copies in stock: ${stock}` : "Out of Stock"}
      <p className="description-label" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide Description" : "Click for Description"}
      </p>
      <div className="desc-text">{showMore ? movie.description : ""}</div>
      <div className="button-regulations">
        <button className="btn btn-warning movieCartAdd" onClick={removeStock}>
          Add
        </button>
        <button
          className="btn btn-primary movieCartSub"
          onClick={addStock}
        >
          Remove
        </button>
        <button
          className="btn btn-warning movieCartFav"
          onClick={addToFav}
        >
          Fav +
        </button>
      </div>
    </div>
  );
}

export default MovieDisplay;
