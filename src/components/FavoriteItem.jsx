import React from "react";
import { connect } from "react-redux";
import * as FavoriteActions from "../Store/actions/FavoritesActions";

import {
  FavoriteHero,
  FavoriteHeroImage,
  FavoriteHeroName
} from "../css/FavoritesItem";

class FavoriteItem extends React.Component {
  constructor() {
    super();
    this.showProfile = this.showProfile.bind(this);
  }
  showProfile() {
    this.props.history.push(`/profile/${this.props.hero.id}`);
  }
  render() {
    return (
      <FavoriteHero key={this.props.hero.id}>
        <i
          className="remove-button far fa-times-circle"
          onClick={() => this.props.removeFavorite(this.props.hero.id)}
        />
        <div onClick={() => this.showProfile(this.props.hero.id)}>
          <FavoriteHeroImage src={this.props.hero.img} alt="" />
          <FavoriteHeroName>{this.props.hero.heroname}</FavoriteHeroName>
        </div>
      </FavoriteHero>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeFavorite: favoriteId =>
    dispatch(FavoriteActions.removeFavorite(favoriteId))
});
export default connect(mapDispatchToProps)(FavoriteItem);
