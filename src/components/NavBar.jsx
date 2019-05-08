import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider, styled} from "styled-components";

import "../css/utils/navbar.css";


const NavBar = styled.


export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
    
  }

  render() {
    //const { isAuthenticated } = this.props.auth;
    return (
      /*  */
      <div className="nav-bar-content">
        <ThemeProvider theme={theme}>
          <nav className="nav-bar">
            <NavLink to="/" className="logo">
              <i className="logo-icon" />
              <span className="logo-text">SuperHeroIndeX</span>
            </NavLink>
            <ul className="menu">
              <li className="menu-item">
                <NavLink className="menu-link" to="/listheroes">
                  <i className="far fa-list-alt" />
                  <span>Todos os heróis</span>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/favorites">
                  <i className="far fa-star" />
                  <span>Heróis Favoritos</span>
                </NavLink>
              </li>
            </ul>
            <div className="user-panel">
              <div id="user-info">
                <span>Nome usuário</span>
                <i className="fas fa-cog" id="user-options" />
              </div>
            </div>
          </nav>
        </ThemeProvider>
      </div>
    );
  }
}
