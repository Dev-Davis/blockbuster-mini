import React, { useState } from "react";

function Movies() {

  const [movies] = useState()

  return (
    <div>
      <h1>Movies</h1>
      {movies}
    </div>
  );
}

export default Movies;
