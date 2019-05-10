import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { MainContent, HeaderContent } from "./css/common";
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";
import ListHeroes from "./components/ListHeroes";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
/* import Loading from "./components/Loading";
import Login from "./components/Login"; */
import Settings from "./components/Settings";

const Routes = () => (
  <BrowserRouter>
    <HeaderContent>
      <NavBar />
    </HeaderContent>
    <MainContent>
      <Switch>
        <Route path="/" render={props => <MainMenu {...props} />} />
        <Route path="/listheroes" render={props => <ListHeroes {...props} />} />
        <Route path="/profile/:id" render={props => <Profile {...props} />} />
        <Route path="/favorites" render={props => <Favorites {...props} />} />
        <Route path="/settings" render={props => <Settings {...props} />} />
      </Switch>
    </MainContent>
  </BrowserRouter>
);

export default Routes;
