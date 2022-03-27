import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Navbar.css";

function Navbar() {
  const { logout, currentUser } = useAuth();


  return (
    <div className="ui fluid container menu">
      <div className="row">
        <div className="navbar col">
              <p className="app-name text-center">Blockbuster Mini</p>
              {!currentUser && <NavLink to="/profile" name="home" />}
            {currentUser && <NavLink to="/profile" name="Profile">Profile</NavLink>}
            {/* <a href="/movies">Movies</a> */}
            {currentUser && <NavLink to="/movies" name="Movies">Movies</NavLink>}
            {/* <a href="/games">Games</a> */}
            {currentUser && <NavLink to="/games" name="Games">Games</NavLink>}
            {/* <a href="/profile/:id/cart">Cart</a> */}
            {currentUser && <NavLink to="/cart" name="Cart">Cart</NavLink>}
          <div className="right item">
            {/* <a href="/" onClick={logout}> */}
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
    </div>
  );
}

export default Navbar;
