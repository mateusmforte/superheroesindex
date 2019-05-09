import React from "react";
//import "../css/mainmenu.css";
import {
  MainMenuContent,
  MainMenuContentHeader,
  MainMenuContentMessage,
  MainMenuContentImage
} from "../css/MainMenu";

export default class MainMenu extends React.Component {
  render() {
   /*  const { isAuthenticated } = this.props.auth;
    !isAuthenticated() && this.props.history.push('/') */
    return (
      <MainMenuContent>
        <MainMenuContentImage src={require('../img/icons/superheroemote.png')} alt="SuperHero Emoji"/>
        <MainMenuContentHeader>
          Bem vindo ao SuperHeroIndex!
        </MainMenuContentHeader>
          <MainMenuContentMessage>
            Para acessar as informações dos heróis utilize o menu.
          </MainMenuContentMessage>
      </MainMenuContent>
    );
  }
}
