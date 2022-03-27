import React, { useState } from "react";

import "./gameDisplay.css";

export default function GamesDisplay({ game }) {
  const [stock, setStock] = useState(game.numOfCopies);

  const addInv = stock + 1;
  const subInv = stock - 1;
  // const gameCopies = game.numOfCopies;

  // todo: set function to modify numOfCopies when clicked, then set conditional in case out of stock
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
  const addToFavs = () => {
console.log('added to favs')
  };

  return (
    <div className="col cover-border text-center" id={game.platform}>
      <h3 className="game-title">{game.title}</h3>
      <img src={game.img} alt="game-cover" className="game-cover" />
      <p className="game-price">${game.price}/night</p>
      <div className="game-copies-box">
        {stock ? `Number of copies in stock: ${stock}` : "Out of Stock"}
      </div>
      <div className="button-regulations">
        <button className="btn btn-warning movieCartAdd" onClick={addToCart}>
          Add
        </button>
        <button
          className="btn btn-primary movieCartSub"
          onClick={removeFromCart}
        >
          Remove
        </button>
        <button
          className="btn btn-warning movieCartFav"
          onClick={addToFavs}
        >
          Fav +
        </button>
      </div>
    </div>
  );
}
