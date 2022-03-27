import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Navbar.css";

function Navbar() {
  const { logout, currentUser } = useAuth();


  return (
    <div className="ui fluid container menu">
      <div className="row">
        <div className="navbar col">
          <div className="secondary item">
            <a href="/">
              <p className="app-name text-center">Blockbuster Mini</p>
              {!currentUser && <NavLink to="/profile" name="home" />}
            </a>
          </div>
          <div className="item">
            {currentUser && <NavLink to="/profile" name="Profile">Profile</NavLink>}
          </div>
          <div className="item">
            {currentUser && <NavLink to="/movies" name="Movies" />}
          </div>
          <div className="item">
            {currentUser && <NavLink to="/games" name="Games" />}
          </div>
          <div className="right item">
            {currentUser && <NavLink to="/cart" name="Cart" />}
          </div>
          <div className="right item">
            {currentUser && (
              <NavLink
                to="/logout"
                name="Logout"
                onClick={async (e) => {
                  e.preventDefault();
                  await logout();
                }}
              ?
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
