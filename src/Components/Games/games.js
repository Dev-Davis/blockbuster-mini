import React, { useState, useEffect } from "react";

import GameDisplay from "./GameDisplay/gameDisplay";

const gameplay = require("../../assets/db/games.json")

function Games() {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState([]);
  const [platform, setPlatform] = useState("all");

  const filterGames = (e, filterType) => {
    const newPlatform = [e.target.value];

    switch (filterType) {
      case "platform":
        setPlatform(e.target.value);
        const selectedPlatform = gameplay.filter(
          (gameplay) => gameplay.platform === newPlatform
        );
        setFilter(selectedPlatform);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let filteredGames = gameplay;

    if(platform !== "all") {
      filteredGames = filteredGames.filter(
        (gameplay) => gameplay.platform === platform
      )
    }
    setGames(filteredGames)
    
  }, [platform]);

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
              <option value="all">All Games (Select a platform)</option>
              <option value="Dreamcast">Dreamcast</option>
              <option value="Nintendo64">Nintendo 64</option>
              <option value="Playstation">Playstation</option>
            </select>
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
