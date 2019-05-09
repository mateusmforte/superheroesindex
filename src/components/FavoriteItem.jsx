import React from "react";
import {
  FavoriteHero,
  FavoriteHeroImage,
  FavoriteHeroName
} from "../css/FavoritesItem";
export default class FavoriteItem extends React.Component {
  constructor() {
    super();
    // this.unfavorite = this.unfavorite.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }
  /*     unfavorite(){
        
    } */
  showProfile() {
    this.props.history.push(`/profile/${this.props.hero.id}`);
    /*  {`/profile/${this.props.hero.id}`}/>; */
  }
  render() {
    return (
      <FavoriteHero key={this.props.hero.id}>
        <i
          className="remove-button far fa-times-circle"
          onClick={() => this.unfavorite(this.props.hero.id)}
        />
        <div onClick={() => this.showProfile(this.props.hero.id)}>
          <FavoriteHeroImage src={this.props.hero.img} alt="" />
          <FavoriteHeroName>{this.props.hero.heroname}</FavoriteHeroName>
        </div>
      </FavoriteHero>
    );
  }
}
