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
            <h2>Nome: {this.props.fullname}</h2>
            <ul>
              <li>
                Gênero:<span>{this.props.gender}</span>
              </li>
              <li>
                Raça:<span>{this.props.race}</span>
              </li>
              <li>
                Altura:
                {this.props.height.map((height,index) => (
                  <span key={index}>{"(" + height + ")"}</span>
                ))}
              </li>
              <li>
                Cor dos Olhos:<span>{this.props.eyecolor}</span>
              </li>
              <li>
                Cor do Cabelo:<span>{this.props.haircolor}</span>
              </li>
            </ul>
            <label htmlFor="alter-egos">Alter egos:</label>
            <AlterEgos>
              <li>{this.props.alteregos}</li>
            </AlterEgos>

            <label htmlFor="aliases">Conhecido por:</label>
            <Aliases>
              {this.props.aliases.map((aliase,index) => (
                <li key={index}>{aliase}</li>
              ))}
            </Aliases>

            <label htmlFor="place-of-birth">
              Local de nascimento:
              <span id="place-of-birth">{this.props.placeofbirth}</span>
            </label>

            <label htmlFor="first-appearance">
              Primeira Aparição:
              <span id="first-appearance">{this.props.firstappearance}</span>
            </label>

            <label htmlFor="publisher">
              Publicado por:
              <span id="publisher">{this.props.publisher}</span>
            </label>

            <label htmlFor="alignment">
              Seguimento:
              <span id="alignment">{this.props.alignment}</span>
            </label>
          </ProfileContent>
        </section>

        <section id="work">
          <ProfileContent>
            <label htmlFor="occupation">
              Ocupação:
              <span id="occupation">{this.props.occupation}</span>
            </label>
            <label htmlFor="base">
              Base:
              <span id="base">{this.props.base}</span>
            </label>
          </ProfileContent>
        </section>

        <section id="connections">
          <ProfileContent>
            <label htmlFor="group-affiliation">
              Grupo(s) afiliado:
              <span id="group-affiliation">{this.props.group}</span>
            </label>
            <label htmlFor="relatives">
              Relações:
              <span id="relatives">{this.props.relatives}</span>
            </label>
          </ProfileContent>
        </section>
      </BiographyArea>
    );
  }
}
