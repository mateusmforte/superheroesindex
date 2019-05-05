import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import ListHeroes from "./components/ListHeroes";
import MainMenu from "./components/MainMenu";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";

import "./css/utils/common.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header-content">
        <NavBar />
      </div>
      <div className="main-content">
        <Route exact path="/" component={MainMenu} />
        <Route path="/listheroes" component={ListHeroes} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </BrowserRouter>
  );
}

export default App;
