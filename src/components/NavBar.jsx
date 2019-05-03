import React, {Component} from 'react';
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
                    <ul className="menu">
                        <li className="menu-item"><a href="">Todos os heróis</a></li>
                        <li className="menu-item"><a href="">Heróis Favoritos</a></li>
                    </ul>
                    <div className="user-info">
                        <span>Nome usuário</span>
                        <img src={require("../img/user.png")} alt="" id="user-photo"/>
                        <i className="fas fa-cog" id="user-options"></i>
                    </div>
                </nav>
            </header>
        )
    }
}