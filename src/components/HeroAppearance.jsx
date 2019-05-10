import React from "react";
import { connect } from "react-redux";
import * as FavoriteActions from "../Store/actions/FavoritesActions";

import { AppearanceArea, HeroImage, AddFavoriteButton } from "../css/Profile";

class HeroAppearance extends React.Component {
  constructor() {
    super();
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  toggleFavorite() {
    var heroId = this.props.heroId;
    var heroName = this.props.heroName;
    var heroImg = this.props.heroimage;
    var isFavorite = false;
    var favorite = {};
    favorite = {
      id: heroId,
      heroname: heroName,
      img: heroImg
    };
    var actualFavorites = [];
    actualFavorites.push(this.props.favorites.favorites);
    this.props.favorites.favorites.map(hero => actualFavorites.push(hero));
    actualFavorites.filter(hero => {
      if (hero["id"] === heroId) {
        isFavorite = true;
        return true;
      }
      return false;
    });

    if (isFavorite) {
      this.props.removeFavorite(favorite.id);
      document.querySelector("#favorite-button").classList.toggle("isFavorite");
    } else {
      this.props.addFavorite(favorite);
      document.querySelector("#favorite-button").classList.toggle("isFavorite");
    }
  }

  render() {
    return (
      <AppearanceArea>
        <HeroImage src={this.props.heroimage} alt="Hero Profile" />
        <AddFavoriteButton
          id="favorite-button"
          heroId={this.props.heroId}
          heroName={this.props.heroName}
          onClick={() => this.toggleFavorite()}
        >
          <i className="fas fa-star" />
        </AddFavoriteButton>
      </AppearanceArea>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(FavoriteActions.addFavorite(favorite)),
  removeFavorite: favoriteid =>
    dispatch(FavoriteActions.removeFavorite(favoriteid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroAppearance);
