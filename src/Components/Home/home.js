import React from "react";

import "./home.css";

function Home() {
  return (
    <div>
      <section className="container-fluid">
        <h2 className="text-center">Welcome to Blockbuster Mini</h2>
        <p className="text-center sub-title">
          Be kind, Rewind and make every night a Blockbuster night
        </p>
        <div className="container">
          <div className="row">
            <button className="login-button ui button">
              Login with Google
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
