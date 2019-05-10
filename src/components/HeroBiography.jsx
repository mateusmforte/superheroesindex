import React from "react";
import {
  BiographyArea,
  ProfileContent,
  AlterEgos,
  Aliases
} from "../css/Profile";

export default class HeroBiography extends React.Component {
  render() {
    return (
      <BiographyArea>
        <section id="biography">
          <ProfileContent>
            <h2>Nome: {this.props.fullname?this.props.fullname:"Não revelado."}</h2>
            <ul>
              <li>
                Gênero:<span>{this.props.gender?this.props.gender:"Não possui."}</span>
              </li>
              <li>
                Raça:<span>{this.props.race?this.props.gender:"Desconhecida."}</span>
              </li>
              <li>
                Altura:
                {this.props.height?this.props.height.map((height, index) => (
                  <span key={index}>{"(" + height + ")"}</span>
                )):"Desconhecida"}
              </li>
              <li>
                Cor dos Olhos:<span>{this.props.eyecolor?this.props.eyecolor:"Não indentificado."}</span>
              </li>
              <li>
                Cor do Cabelo:<span>{this.props.haircolor?this.props.haircolor:"Não identificado."}</span>
              </li>
            </ul>
            <label htmlFor="alter-egos">Alter egos:</label>
            <AlterEgos>
              <li>{this.props.alteregos?this.props.alteregos:"Não possui Alter egos."}</li>
            </AlterEgos>

            <label htmlFor="aliases">Conhecido por:</label>
            <Aliases>
              {this.props.aliases?this.props.aliases.map((aliase, index) => (
                <li key={index}>{aliase}</li>
              )):"Nenhum nome conhecido."}
            </Aliases>

            <label htmlFor="place-of-birth">
              Local de nascimento:
              <span id="place-of-birth">{this.props.placeofbirth?this.props.placeofbirth:"Lugar desconhecido."}</span>
            </label>

            <label htmlFor="first-appearance">
              Primeira Aparição:
              <span id="first-appearance">{this.props.firstappearance? this.props.firstappearance:"primeira aparição desconhecida."}</span>
            </label>

            <label htmlFor="publisher">
              Publicado por:
              <span id="publisher">{this.props.publisher?this.props.publisher:"Desconhecido."}</span>
            </label>

            <label htmlFor="alignment">
              Seguimento:
              <span id="alignment">{this.props.alignment?this.props.alignment:"não possui."}</span>
            </label>
          </ProfileContent>
        </section>

        <section id="work">
          <ProfileContent>
            <label htmlFor="occupation">
              Ocupação:
              <span id="occupation">{this.props.occupation?this.props.occupation:"Nenhuma"}</span>
            </label>
            <label htmlFor="base">
              Base:
              <span id="base">{this.props.base?this.props.base:"Não possui base."}</span>
            </label>
          </ProfileContent>
        </section>

        <section id="connections">
          <ProfileContent>
            <label htmlFor="group-affiliation">
              Grupo(s) afiliado:
              <span id="group-affiliation">{this.props.group?this.props.group:"Nenhuma afiliação."}</span>
            </label>
            <label htmlFor="relatives">
              Relações:
              <span id="relatives">{this.props.relatives?this.props.relatives:"Nenhuma relação"} </span>
            </label>
          </ProfileContent>
        </section>
      </BiographyArea>
    );
  }
}
