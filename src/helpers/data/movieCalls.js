import { useState } from 'react'
import axios from "axios";

// const movies = '../../db.movies.json'

const getAllMovies = () =>

new Promise((resolve, reject) => {
    const [movies, setMovies] = useState;
    axios
      .get("https://blockbuster-mini-default-rtdb.firebaseio.com/movies.json")
      .then((res) => {
        const movies = Object.values(res.data);
        setMovies(movies);
      })
      .catch((err) => console.log("could not get movies", err));
  });

const theMovies = {
  getAllMovies,
};

export default {
  theMovies,
};
