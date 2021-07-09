import React, {useState} from "react"

import "./movieDisplay.css"

function MovieDisplay({ movie }) {
  const [stock] = useState((movie.numOfCopies))

  // todo: set function to subtract from numOfCopies when clicked, then set conditional incase out of stock
  const inventory = () => {
    console.log('added to cart')
  }

  return (
    <div className="col cover-border text-center">
      <h3 className="movie-title">{movie.title}</h3>
      <img src={movie.img} alt="movie-cover" className="movie-cover" />
      <p className="movie-price">${movie.price}/night</p>
      <p>Number of copies in stock: {stock}</p>
      <button className="btn btn-primary addMovieToCart" onClick={inventory}>Add To Cart</button>
    </div>
  );
}

export default MovieDisplay;