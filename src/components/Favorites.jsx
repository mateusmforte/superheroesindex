import React from "react";

//import "../css/favorites.css";
import Search from "./Search";
import Error from "./Error";
import FavoriteItem from "./FavoriteItem";

import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList
} from "../css/Favorites";

export default class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoritesHeroes: JSON.parse(localStorage.getItem("user")).favoritesHeroes,
      searchHeroes: []
    };

    this.searchHeroes = this.searchHeroes.bind(this);
  }
  componentWillMount() {
    this.setState({ searchHeroes: this.state.favoritesHeroes });
  }
  searchHeroes(event) {
    var updatedList = this.state.favoritesHeroes;
    updatedList = updatedList.filter(
      item =>
        item.heroname.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
    );
    this.setState({ searchHeroes: updatedList });
  }

  render() {
    return (
      <FavoritesContainer>
        <FavoritesTitle>My Favorites Heroes</FavoritesTitle>
        <Search onChange={this.searchHeroes} />
        {this.state.searchHeroes.length === 0 && <Error error="notfound" />}
        <FavoritesList>
          {this.state.searchHeroes.map(hero => (
            <FavoriteItem
              key={hero.id}
              hero={hero}
              history={this.props.history}
            />
          ))}
        </FavoritesList>
      </FavoritesContainer>
    );
  }
}
