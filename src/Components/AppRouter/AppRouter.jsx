import React from "react";

import Cart from "../Cart/Cart";
import Games from "../Games/games";
import Home from "../Home/home";
import Movies from "../Movies/movies";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

import '../../App/App.css'

export default function AppRouter(props) {
  return (
    <div className="App">
      <Router>
        {/* child routers go here */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectionRoute path="/profile" exact component={Profile} />
          <ProtectionRoute path="/movies" exact component={Movies} />
          <ProtectionRoute path="/games" exact component={Games} />
          <ProtectionRoute path="/profile/:id/cart" exact component={Cart} />
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

function ProtectionRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log("path", path);
  const location = useLocation();
  console.log("location state", location.state);

  if (
    path === "/login"
    // path === "/register" ||
    // path === "/forgot-password" ||
    // path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        psthname: "/login",
        state: { from: path },
      }}
    />
  );
}
