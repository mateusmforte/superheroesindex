import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import '../css/navbar.css';
export default class NavBar extends Component{
    constructor(){
        super();
        this.state={

        };
    }
    render(){
        return(
            <header>
                <nav className="nav-bar">
                    <NavLink to="/" className="home-link"><i className="fas fa-mask"></i></NavLink>
                    <ul className="menu">
                        <li className="menu-item"><NavLink to="/listheroes">Todos os heróis</NavLink></li>
                        <li className="menu-item"><NavLink to="/favorites">Heróis Favoritos</NavLink></li>
                    </ul>
                    <div className="user-info">
                        <span>Nome usuário</span>
                        <Avatar src={require("../img/user.png")}/>
                        <i className="fas fa-cog" id="user-options"></i>
                    </div>
                </nav>
            </header>
        )
    }
}