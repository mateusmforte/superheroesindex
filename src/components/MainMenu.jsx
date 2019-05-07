import React, { Component } from "react";
import "../css/mainmenu.css";

export default class MainMenu extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
  
  }
  render() {
    const { isAuthenticated } = this.props.auth;
   /*  if(!isAuthenticated()){
        window.location.pathname = '/';
    } */
    return (
      <div className="main-menu-content">
        <h1>Bem vindo ao SuperHeroIndex!</h1>
        <div className="user-loged">
          <p>O que deseja procurar?</p>
          <div className="main-menu">
            <div className="main-menu-option" id="all-heroes-option">
              <img
                className="menu-image"
                src={require("../img/checklist.png")}
                alt=""
              />
              <h3>Todos os Heróis</h3>
            </div>
            <span className="vl" />
            <div className="main-menu-option" id="favorite-heroes-option">
              <img
                className="menu-image"
                src={require("../img/favorite.png")}
                alt=""
              />
              <h3>Meus Heróis Favoritos</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
