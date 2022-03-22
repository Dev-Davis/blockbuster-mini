import React, { useState, useEffect } from "react";

import MovieDisplay from "./MovieDisplay/movieDisplay";

import "./movies.css";

const films = require("../../assets/db/films.json")


function Movies() {
  const [movies, setMovies] = useState(films);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState("all");

  // function to set the filtered movies to return
  const handleFilterChange = (e, filterType) => {
    const newCategory = e.target.value;

    // todo: this needs to check for all movies and set that
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        const selectedMovies = films.filter(
          (films) => films.category === newCategory
        );
        setFilter(selectedMovies);
        break;
      default:
        break;
    }
  };

  // const getAllFilms = () => {
  //   axios
  //   .get("https://blockbuster-mini-default-rtdb.firebaseio.com/movies.json")
  //   .then((res) => {
  //     const movies = Object.values(res.data);
  //     setMovies(movies);
  //     setFilter(movies);
  //   })
  //   .catch((err) => console.log("could not get movies", err));
  // }

  

  useEffect(() => {
    let filteredFilms = films;

    if (category !== "all") {
      filteredFilms = filteredFilms.filter(
        (films) => films.category === category
      )
    }
    setMovies(filteredFilms)
    // axios
    //   .get("https://blockbuster-mini-default-rtdb.firebaseio.com/movies.json")
    //   .then((res) => {
    //     const movies = Object.values(res.data);
    //     setMovies(movies);
    //     setFilter(movies);
    //   })
    //   .catch((err) => console.log("could not get movies", err));

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
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Family">Family</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-fi</option>
          <option value="Sport">Sport</option>
          <option value="Thriller">Thriller</option>
          {/* <option value="Drama">Drama</option> */}
          {/* <option value="Fantasy">Fantasy</option> */}
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
