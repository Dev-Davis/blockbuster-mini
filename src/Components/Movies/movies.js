import React, { useState } from "react";
import movieData from '../../helpers/movieCalls'

function Movies() {

  const [movies, setMovies] = useState()

  return (
    <div>
      <h1>Movies</h1>
      {movies}
    </div>
  );
}

export default Movies;
