import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Auth from "./Auth/Auth";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import ListHeroes from "./components/ListHeroes";
import MainMenu from "./components/MainMenu";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Settings from "./components/Settings";

import { MainContent, HeaderContent } from "./css/common";
//import "./css/utils/common.css";

const auth = new Auth();
if (!localStorage.getItem("user")) {
  const user = {
    email: "m-forte@hotmail.com",
    favoritesHeroes: [],
    userPreferences: {
      userTheme: "dc"
    }
  };
  localStorage.setItem("user", JSON.stringify(user));
}

const USER_PREFERENCES = JSON.parse(localStorage.getItem("user"))
  .userPreferences;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userTheme: USER_PREFERENCES.userTheme
    };
  }
  render() {
    return (
      <ThemeProvider theme={{color:this.state.userTheme}}>
        <BrowserRouter>
          <HeaderContent>
            <NavBar auth={auth} />
          </HeaderContent>
          <MainContent>
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
              render={props => (
                <Loading {...props} auth={auth} text="Conectando" />
              )}
            />
          </MainContent>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
