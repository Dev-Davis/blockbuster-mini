import React, { useState, useEffect } from "react";

import GameDisplay from "./GameDisplay/gameDisplay";

import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://blockbuster-mini-default-rtdb.firebaseio.com/games.json")
      .then((res) => {
        const games = Object.values(res.data);
        setGames(games);
      })
      .catch((err) => console.log("could not get games", err));
  }, []);

  return (
    <div>
      <h2 className="text-center">Games</h2>
      <div className="ui container text-center">
        <select
          name="category"
          id="category-select"
          className="ui multiple selection dropdown"
        >
          <option value="select-platform">Select Platform</option>
          <option value="playstation">PlayStation</option>
          <option value="nintendo-64">Nintendo 64</option>
          <option value="dreamcast">Dreamcast</option>
          <option value="super">Super Nintendo</option>
          <option value="sega">Sega Genesis</option>
        </select>
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
