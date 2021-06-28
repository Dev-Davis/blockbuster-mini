import React, { useState, useEffect } from "react";

import MovieDisplay from "./MovieDisplay/movieDisplay";

import axios from "axios";

import "./movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("all");

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        break;
      default:
        break;
    }
  };

  const getAllMovies = () => {
    axios
    .get("https://blockbuster-mini-default-rtdb.firebaseio.com/movies.json")
    .then((res) => {
      const movies = Object.values(res.data);
    })
    .catch((err) => console.log("could not get movies", err));
  }
  getAllMovies()

  useEffect(() => {
    let selectedMovies = movies; 

    if(category !== "all") {
      selectedMovies = movies.filter((movie) => movie.category === category)
    }
    setMovies(selectedMovies)
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Movies</h2>
      <div className="ui container text-center">
        <select
          name="category"
          id="category"
          onChange={(e) => handleFilterChange(e, "category")}
          className="ui multiple selection dropdown"
        >
          <option value="all">All Movies (Select a genre)</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-fi</option>
          <option value="Sport">Sport</option>
          <option value="Family">Family</option>
          <option value="Crime">Crime</option>
          <option value="Adventure">Adventure</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <MovieDisplay key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
