import React from "react";
//import "../css/mainmenu.css";
import {
  MainMenuContent,
  MainMenuContentHeader,
  MainMenuContentMessage,
  MainMenuContentImage
} from "../css/MainMenu";

export default class MainMenu extends React.Component {
  constructor(props){
    super();
    console.log(this.props.theme);
  }
  render() {
   /*  const { isAuthenticated } = this.props.auth;
    !isAuthenticated() && this.props.history.push('/') */
    return (
      <MainMenuContent>
        <MainMenuContentHeader>
          Bem vindo ao SuperHeroIndex!
          <MainMenuContentImage src={require('../img/icons/superheroemote.png')} alt="SuperHero Emoji"/>
        </MainMenuContentHeader>
          <MainMenuContentMessage>
            Para acessar as informações dos heróis utilize o menu.
          </MainMenuContentMessage>
      </MainMenuContent>
    );
  }
}
