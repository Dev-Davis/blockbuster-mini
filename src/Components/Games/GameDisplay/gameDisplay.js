import React from "react";

import "./gameDisplay.css";

function gamesDisplay({ game }) {
  return (
    <div className="col cover-border text-center">
      <h3>{game.title}</h3>
      <img src={game.img} alt="game-cover" className="game-cover" />
      <p>Number of copies in stock: {game.numOfCopies}</p>
      <button className="btn btn-primary addToCart">Add To Cart</button>
    </div>
  );
}

export default gamesDisplay;
