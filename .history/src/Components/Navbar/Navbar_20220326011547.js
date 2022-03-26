import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const { logout, currentUser } = useAuth()

  const Navbar = () => {
    return (
      <div className="ui fluid container menu">
        <div className="row">
          <div className="navbar col">
            <div className="secondary item">
              <a href="/">
                <p className="app-name text-center">Blockbuster Mini</p>
                {currentUser && <NavLink to='/profile' name='Profile' />}
              </a>
            </div>
            <div className="item">
              {/* <a href="/profile">Profile</a> */}
              {currentUser && <NavLink to='/profile' name='Profile' />}
              </div>
              <div className="item">
              {/* <a href="/movies">Movies</a> */}
              {currentUser && <NavLink to='/movies' name='Movies' />}
              </div>
              <div className="item">
              {/* <a href="/games">Games</a> */}
              {currentUser && <NavLink to='/games' name='Games' />}
              </div>
              <div className="right item">
              {/* <a href="/profile/:id/cart">Cart</a> */}
              {currentUser && <NavLink to='/cart' name='Cart' />}
              </div>
              <div className="right item">
              {/* <a href="/" onClick={logout}> */}
              {currentUser && <NavLink to='/logout' name='Logout' />}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const guestMenu = () => {
    return (
</div>;
}

export default Navbar;
