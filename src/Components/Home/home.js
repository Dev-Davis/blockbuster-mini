import React from "react";
import { Link } from "react-router-dom";

import Movies from '../Movies/movies'

import "./home.css";

function Home() {
  return (
    <div>
      <section className="container-fluid">
        <h1 className="text-center">Welcome to Blockbuster Mini</h1>
        <p className="text-center sub-title">
          Make every night, a Blockbuster night ... on the go
        </p>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="selections text-center">
            <Link>
              <p>Movies</p>
            </Link>
            <Link>
              <p>Games</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
