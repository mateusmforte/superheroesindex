import React, {Component} from 'react';
import '../css/navbar.css';

import Avatar from '@material-ui/core/Avatar';

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
                    <ul className="menu">
                        <li className="menu-item"><a href="">Todos os heróis</a></li>
                        <li className="menu-item"><a href="">Heróis Favoritos</a></li>
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