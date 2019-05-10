import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  NavBarContent,
  Navbar,
  LogoIcon,
  LogoText,
  Menu,
  MenuItem,
  UserPanel,
  UserInfo
} from "../css/NavBar";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      theme: "marvel"
    };
  }

  render() {
    //const { isAuthenticated } = this.props.auth;
    return (
      <NavBarContent>
        <Navbar>
          <NavLink to="/mainmenu" className="logo">
            <LogoIcon />
            <LogoText>Super Hero Index</LogoText>
          </NavLink>
          <Menu>
            <MenuItem>
              <NavLink className="menu-link" to="/listheroes">
                <i className="far fa-list-alt" />
                <span>Todos os heróis</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink className="menu-link" to="/favorites">
                <i className="far fa-star" />
                <span>Heróis Favoritos</span>
              </NavLink>
            </MenuItem>
          </Menu>
          <UserPanel>
            <UserInfo>
              <span>Nome usuário</span>
              <NavLink to="/settings">
                <i className="fas fa-cog" id="user-options" />
              </NavLink>
            </UserInfo>
          </UserPanel>
        </Navbar>
      </NavBarContent>
    );
  }
}
