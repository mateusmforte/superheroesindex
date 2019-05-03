import React, {Component} from 'react';
import NavBar from './NavBar';
import '../css/mainmenu.css';

export default class MainMenu extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <main>
                    <h1>Bem vindo ao SuperHeroIndex!<i className="fas fa-mask"></i></h1>
                    <div className="main-menu">
                        <div className="main-menu-option" id="all-heroes-option">
                            <img className="menu-image" src={require("../img/checklist.png")} alt=""/>
                            <h3>Todos os Heróis</h3>
                        </div>
                        <span className="vl"></span>
                        <div className="main-menu-option" id="favorite-heroes-option">
                            <img className="menu-image" src={require("../img/favorite.png")} alt=""/>
                            <h3>Meus Heróis Favoritos</h3>
                        </div>
                    </div> 
                </main>
            </div>
        );
    }
}