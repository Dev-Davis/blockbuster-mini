import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const { logout, }

  const memberMenu = () => {
    return (
      <div className="ui fluid container menu">
        <div className="row">
          <div className="navbar col">
            <div className="secondary item">
              <a href="/">
                <p className="app-name text-center">Blockbuster Mini</p>
              </a>
            </div>
            <div className="item">
              <a href="/profile">Profile</a>
            </div>
            <div className="item">
              <a href="/movies">Movies</a>
            </div>
            <div className="item">
              <a href="/games">Games</a>
            </div>
            <div className="right item">
              <a href="/profile/:id/cart">Cart</a>
            </div>
            <div className="right item">
              <a href="/" onClick={logout}>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const guestMenu = () => {
    return (
      <div className="ui menu">
        <div className="item">Blockbuster Mini</div>
        <div className="right item" onClick={login()}>
          Sign In
        </div>
      </div>
    );
  };

  return <div className="nav">{{ user } ? memberMenu() : guestMenu()}</div>;
}

export default Navbar;
