import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import { MainContent, HeaderContent } from "./css/common";
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";
import ListHeroes from "./components/ListHeroes";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Auth from "./Auth/Auth";



const auth = new Auth();

const Routes = () => (
  <BrowserRouter>
    <HeaderContent>
      <NavBar auth={auth} />
    </HeaderContent>
    <MainContent>
    <Switch> 
     <Route
        exact
        path="/"
        render={props => <Login auth={auth} {...props} />}
      />
      <Route
        path="/mainmenu"
        render={props => <MainMenu auth={auth} {...props} />}
      />
      <Route
        path="/listheroes"
        render={props => <ListHeroes auth={auth} {...props} />}
      />
      <Route
        path="/profile/:id"
        render={props => <Profile auth={auth} {...props} />}
      />
      <Route
        path="/favorites"
        render={props => <Favorites auth={auth} {...props} />}
      />
      <Route
        path="/settings"
        render={props => <Settings auth={auth} {...props} />}
      />
      <Route
        path="/callback"
        render={props => <Loading {...props} auth={auth} text="Conectando" />}
      />
      </Switch>
    </MainContent>
  </BrowserRouter>
);

export default Routes;
