import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Navbar.css";

function Navbar() {
  const { logout, currentUser } = useAuth();

  return (
    <div className="ui fluid container menu">
      {currentUser ? (
        <div className="row">
          <div className="navbar col">
            <div className="secondary item">
              <a href="/">
                <p className="app-name text-center">Blockbuster Mini</p>
                {!currentUser && <NavLink to="/profile" name="home" />}
              </a>
            </div>
            <div className="item">
              {currentUser && (
                <NavLink to="/profile" name="Profile">
                  Profile
                </NavLink>
              )}
            </div>
            <div className="item">
              {/* <a href="/movies">Movies</a> */}
              {currentUser && (
                <NavLink to="/movies" name="Movies">
                  Movies
                </NavLink>
              )}
            </div>
            <div className="item">
              {/* <a href="/games">Games</a> */}
              {currentUser && (
                <NavLink to="/games" name="Games">
                  Games
                </NavLink>
              )}
            </div>
            <div className="right item">
              {/* <a href="/profile/:id/cart">Cart</a> */}
              {currentUser && (
                <NavLink to="/profile/:id/cart" name="Cart">
                  Cart
                </NavLink>
              )}
            </div>
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
                >
                  Logout
                </NavLink>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="navbar col">
            {!currentUser && (
              <NavLink to="/profile" name="home">
                Blockbuster Mini
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
