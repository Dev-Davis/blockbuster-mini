import React, { useState, useEffect } from "react";

import Cart from "../Components/Cart/Cart";
import Games from "../Components/Games/games";
import Home from "../Components/Home/home";
import Movies from "../Components/Movies/movies";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../Components/Navbar/Navbar";
import NotFound from "../Components/NotFound/NotFound";
import Profile from "../Components/Profile/Profile";

import "./App.css";

export default function AppRouter(props) {
  return (
    <div className="App">
      <Router>
        {/* child routers go here */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/games" exact component={Games} />
          <Route path="/profile/:id/cart" exact component={Cart} />
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
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }
}
