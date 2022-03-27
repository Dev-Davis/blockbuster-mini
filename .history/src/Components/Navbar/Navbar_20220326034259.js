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
              <p className="app-name text-center">Blockbuster Mini</p>
              {!currentUser && <NavLink to="/profile" name="home" />}
          </div>
            {currentUser && <NavLink to="/profile" name="Profile">Profile</NavLink>}
            {/* <a href="/movies">Movies</a> */}
            {currentUser && <NavLink to="/movies" name="Movies">Movies</NavLink>}
            {currentUser && <NavLink to="/games" name="Games">Games</NavLink>}
            {currentUser && <NavLink to="/cart" name="Cart">Cart</NavLink>}
            {currentUser && (
              <NavLink
                to="/logout"
                name="Logout"
                onClick={async (e) => {
                  e.preventDefault();
                  await logout();
                }}
              >Logout</NavLink>
            )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
