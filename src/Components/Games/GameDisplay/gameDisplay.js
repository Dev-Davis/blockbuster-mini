import React from "react";

import "./gameDisplay.css";

function gamesDisplay({ game }) {
  const addToCart = () => {
    const buttonId = game.id;
    console.log(buttonId);
  };

  const watchTrailer = () => {
    console.log("movie trailer");
  };

  return (
    <div className="col cover-border text-center" id={game.platform}>
      <h3 className="game-title">{game.title}</h3>
      <img src={game.img} alt="game-cover" className="game-cover" />
      <p className="game-price">${game.price}/night</p>
      <p className="stock">Number of copies in stock: {game.numOfCopies}</p>
      <button
        className="btn btn-primary addToCart"
        id={game.id}
        onClick={addToCart}
      >
        Add To Cart
      </button>
      <button
        type="button"
        className="btn btn-primary"
        // data-toggle="modal"
        data-target="#gameTrailer"
      >
        Watch Trailer
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="gameTrailer"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default gamesDisplay;
