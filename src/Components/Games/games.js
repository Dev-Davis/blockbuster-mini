import React, { useState, useEffect } from "react";

import GameDisplay from "./GameDisplay/gameDisplay";

import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedPlatform, setPlatform] = useState("all");

  const filterGames = (e, filterType) => {
    const newPlatform = e.target.value;

    switch (filterType) {
      case "platform":
        setPlatform(newPlatform);
        const selectedPlatform = games.filter(
          (game) => game.platform === newPlatform
        );
        setFilter(selectedPlatform);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get("https://blockbuster-mini-default-rtdb.firebaseio.com/games.json")
      .then((res) => {
        const games = Object.values(res.data);
        setGames(games);
        setFilter(games);
      })
      .catch((err) => console.log("could not get games", err));
  }, []);

  return (
    <div>
      <h2 className="text-center">Games</h2>
      <div className="ui container text-center">
        <div className="row">
          <div className="ui container text-center">
            <select
              name="platform"
              id="platform"
              onChange={(e) => filterGames(e, "platform")}
              className="ui multiple selection dropdown"
            >
              <option value="all">All Movies (Select a genre)</option>
              <option value="Dreamcast">Dreamcast</option>
              <option value="Nintendo64">Nintendo 64</option>
              <option value="Playstation">Playstation</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {filter.map((game) => (
            <GameDisplay key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
