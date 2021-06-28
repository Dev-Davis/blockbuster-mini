import React from "react"

import "./movieDisplay.css"

function movieDisplay({ movie }) {
  return (
    <div className="col cover-border text-center">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="movie-cover" className="movie-cover" />
      <p className="movie-price">${movie.price}/night</p>
      <p>Number of copies in stock: {movie.numOfCopies}</p>
      <button className="btn btn-primary addToCart">Add To Cart</button>
    </div>
  );
}

export default movieDisplay;