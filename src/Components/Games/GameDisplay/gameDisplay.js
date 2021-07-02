import React from "react";

import "./gameDisplay.css";

function gamesDisplay({ game }) {

  const addToCart = () => {
    const buttonId = game.id;
    console.log(buttonId)
  }

  return (
    <div className="col cover-border text-center" id={game.platform}>
      <h3 className="game-title">{game.title}</h3>
      <img src={game.img} alt="game-cover" className="game-cover" />
      <p className="game-price">${game.price}/night</p>
      <p className="stock">Number of copies in stock: {game.numOfCopies}</p>
      <button className="btn btn-primary addToCart" id={game.id} onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default gamesDisplay;
