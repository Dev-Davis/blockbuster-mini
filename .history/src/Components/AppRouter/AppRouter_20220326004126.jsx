import React, { useState, useEffect } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Games from "../Components/Games/games";
import Home from "../Components/Home/home";
import Movies from "../Components/Movies/movies";
import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import NotFound from "../Components/NotFound/NotFound";
import Profile from "../Components/Profile/Profile";

function AppRouter(props) {
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

export default App;
