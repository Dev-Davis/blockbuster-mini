import React, {useState} from "react"

import "./movieDisplay.css"

function MovieDisplay({ movie }) {
  const [stock, setStock] = useState((movie.numOfCopies))

  // todo: set function to subtract from numOfCopies when clicked, then set conditional incase out of stock
  const numLeft = () => {
    const stock = (movie.numOfCopies);
    if(stock >= 5) {
      return (stock - 1);
    } 
  }

  return (
    <div className="col cover-border text-center">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="movie-cover" className="movie-cover" />
      <p className="movie-price">${movie.price}/night</p>
      <p>Number of copies in stock: {stock}</p>
      <button className="btn btn-primary addToCart" onClick={numLeft}>Add To Cart</button>
    </div>
  );
}

export default MovieDisplay;