import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import "./home.css";

function Home() {
  const { signInWithGoogle, login } = useAuth();
  const location = useLocation();
  const history = useHistory();

  function handleRedirectToOrBack() {
    history.replaceState(location.state?.from ?? "/profile");
  }

  return (
    <div>
      <section className="container-fluid home">
        <h2 className="text-center">Welcome to Blockbuster Mini</h2>
        <p className="text-center sub-title">
          Be kind, Rewind and make every night a Blockbuster Mini night
        </p>
        <div className="container">
          <div className="row">
            <button
              className="login-button ui button"
              onClick={() => {
                signInWithGoogle()
                .then(user => {
                  handleRedirectToOrBack();
                })
                .catch(e => console.log(e.message))
              })
            >
              Login with Google
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
