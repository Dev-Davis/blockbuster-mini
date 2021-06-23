import React from "react";

import "./Navbar.css";

function Navbar() {
  const memberMenu = () => {
    return (
      <div className="ui container menu">
        <div className="secondary item">
          <a href="/">
            <i className="barcode icon"></i>
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
          <a href="/">Sign Out</a>
        </div>
      </div>
    );
  };

  // const guestMenu = () => {
  //   return (
  //     <div className="ui menu">
  //       <div className="item">Blockbuster Mini</div>
  //       <div className="right item">Sign Out</div>
  //     </div>
  //   );
  // };

  return <div className="nav">{memberMenu()}</div>;
}

export default Navbar;
