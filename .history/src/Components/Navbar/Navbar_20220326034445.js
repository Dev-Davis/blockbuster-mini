import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Navbar.css";

function Navbar() {
  const { logout, currentUser } = useAuth();


  return (
    <div className="ui fluid container menu">
      <div className="row">
        <div className="navbar col">
              {!currentUser && <NavLink to="/profile" name="home">Blockbuster Mini</NavLink>} |
            {currentUser && <NavLink to="/profile" name="Profile">Profile</NavLink>}
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
