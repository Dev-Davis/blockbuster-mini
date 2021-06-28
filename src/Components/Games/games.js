import React, { useState, useEffect } from "react";

import GameDisplay from "./GameDisplay/gameDisplay";

import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);
  // const [user, setUser] = useState(true);
  // const [filteredGames, setFilteredGames] = useState(false);

  useEffect(() => {
    axios
      .get("https://blockbuster-mini-default-rtdb.firebaseio.com/games.json")
      .then((res) => {
        const games = Object.values(res.data);
        setGames(games);
      })
      .catch((err) => console.log("could not get games", err));
  }, []);

  const allGames = () => {
    const all = games.map((game) => <GameDisplay key={game.id} game={game} />);
    return all;
  };

  const filterGames = (e) => {
    const buttonId = e.target.id; // id of button is game platform
    console.log(buttonId)
    const selected = [];
    games.filter((game) => buttonId === game.platform);
  };

  return (
    <div>
      <h2 className="text-center">Games</h2>
      <div className="ui container text-center">
        <div className="row">
          <div className="game-selection-buttons">
            <button className="ui button" id="all-games" onClick={filterGames}>
              All Games
            </button>
            <button
              className="ui button"
              id="Playstation"
              onClick={filterGames}
            >
              PlayStation
            </button>
            <button className="ui button" id="Nintendo64" onClick={filterGames}>
              Nintendo 64
            </button>
            <button className="ui button" id="Dreamcast" onClick={filterGames}>
              Dreamcast
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {games.map((game) => (
            <GameDisplay key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
