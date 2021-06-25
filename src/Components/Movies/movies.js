import React, { useState, useEffect } from "react"

import MovieDisplay from './MovieDisplay/movieDisplay'

import axios from 'axios'

import './movies.css'

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://blockbuster-mini-default-rtdb.firebaseio.com/movies.json")
      .then((res) => {
        const movies = Object.values(res.data);
        setMovies(movies);
      })
      .catch((err) => console.log("could not get movies", err));
  }, []);

  return (
    <div>
      <h2 className="text-center">Movies</h2>
      <div className="ui container text-center">
        <select name="category" id="category-select" className="ui multiple selection dropdown">
          <option value="select-movie">Select Genre</option>
          <option value="horrow">Horror</option>
          <option value="comdey">Comdey</option>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
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
