import React from "react";
import {AppearanceArea,AppearanceInfo,HeroImage,AddFavoriteButton} from '../css/Profile';
export default class HeroAppearance extends React.Component {
  favorite() {
    var heroId = this.props.heroId;
    var heroName = this.props.heroName;
    var heroImg = this.props.heroimage;

    var isFavorite = false;
    var favorite = [];
    var actualUserPreferences = JSON.parse(localStorage.getItem("user"));
    var actualUserFavorites = actualUserPreferences.favoritesHeroes;

    actualUserFavorites.filter(hero => {
      if (hero.id === heroId) {
        //Favorite
        isFavorite = true;
        favorite.push(hero);
        return true;
      }
      return false;
    });

    if (isFavorite) {
      for (var elemento of favorite) {
        var index = actualUserFavorites.indexOf(elemento);
        actualUserFavorites.splice(index, 1);
      }
      actualUserFavorites.splice(heroId, 1);
      localStorage.setItem("user", JSON.stringify(actualUserPreferences));
    } else {
      actualUserFavorites.push({
        id: heroId,
        heroname: heroName,
        img: heroImg
      });
      localStorage.setItem("user", JSON.stringify(actualUserPreferences));
    }
  }

  render() {
    return (
      <AppearanceArea>
        <AppearanceInfo>
          <HeroImage src={this.props.heroimage} alt="Hero Profile" />
          <AddFavoriteButton
            heroId={this.props.heroId}
            heroName={this.props.heroName}
            onClick={this.favorite.bind(this)}
          >
            <i className="fas fa-star" />
          </AddFavoriteButton>
        </AppearanceInfo>
      </AppearanceArea>
    );
  }
}
