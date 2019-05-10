import React from "react";

import HeroName from "./HeroName";
import HeroAppearance from "./HeroAppearance";
import HeroBiography from "./HeroBiography";
import HeroStatus from "./HeroStatus";
import Loading from "./Loading";
import Error from "./Error";

import { ProfileContainer } from "../css/Profile";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      hero: [{}],
      isLoading: true,
      error: false,
      errorType: ""
    };
  }
  componentWillMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var urlIdHero = window.location.pathname.slice(9, 15);

    fetch(
      proxyUrl + `https://superheroapi.com/api/2385494458138031/${urlIdHero}`
    )
      .then(results => results.json())
      .then(hero => {
        this.setState({ hero, isLoading: false });
      })
      .catch(err => {
        this.setState({
          error: true,
          errorType: "connection",
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading text="Carregando Herói.." />;
    } else if (this.state.error) {
      return <Error error={this.state.errorType} />;
    } else {
      return (
        <ProfileContainer>
          <HeroName heroname={this.state.hero.name} />
          <HeroAppearance
            heroimage={this.state.hero.image.url}
            heroId={this.state.hero.id}
            heroName={this.state.hero.name}
          />
          <HeroBiography
            fullname={this.state.hero.biography["full-name"]}
            gender={this.state.hero.appearance.gender}
            race={this.state.hero.appearance.race}
            height={this.state.hero.appearance.height}
            eyecolor={this.state.hero.appearance["eye-color"]}
            haircolor={this.state.hero.appearance["hair-color"]}
            alteregos={this.state.hero.biography["alter-egos"]}
            aliases={this.state.hero.biography["aliases"]}
            placeofbirth={this.state.hero.biography["place-of-birth"]}
            firstappearance={this.state.hero.biography["first-appearance"]}
            publisher={this.state.hero.biography.publisher}
            alignment={this.state.hero.biography.alignment}
            occupation={this.state.hero.work.occupation}
            base={this.state.hero.work.base}
            group={this.state.hero.connections["group-affiliation"]}
            relatives={this.state.hero.connections.relatives}
          />
          <HeroStatus statusdata={this.state.hero.powerstats} />
        </ProfileContainer>
      );
    }
  }
}
