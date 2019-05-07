import React,{useState} from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Auth from "./Auth/Auth";
import history from "./history";
import NavBar from "./components/NavBar";
import ListHeroes from "./components/ListHeroes";
import MainMenu from "./components/MainMenu";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Loading from "./components/Loading";
import Login from "./components/Login";

import "./css/utils/common.css";

const auth = new Auth();
if(!localStorage.getItem('user')){
  const user = {
    email : "m-forte@hotmail.com",
    favoritesHeroes : [],
    themePreferences : []
  }
  localStorage.setItem('user',JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem('user')));
}
export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter history={history}>
        <div className="header-content">
          <NavBar auth={auth}/>
        </div>
        <div className="main-content">
          <Route exact path="/" render={props => <Login auth={auth} {...props} />} />
          <Route path="/mainmenu" render={props => <MainMenu auth={auth} {...props} />} />
          <Route path="/listheroes" render={props => <ListHeroes auth={auth} {...props} />} />
          <Route path="/profile/:id" render={props => <Profile auth={auth} {...props} />} />
          <Route path="/favorites" render={props => <Favorites auth={auth} {...props} />} />
          <Route path="/callback" render={props => <Loading {...props}  auth={auth} text="Conectando"/>}/>
        </div>
      </BrowserRouter>
    );
  }
}


