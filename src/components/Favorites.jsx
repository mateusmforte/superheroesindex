import React from "react";
import { connect } from "react-redux";


import Search from "./Search";
import Error from "./Error";
import FavoriteItem from "./FavoriteItem";

import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList
} from "../css/Favorites";

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      searchHeroes: []
    };

    this.searchHeroes = this.searchHeroes.bind(this);
  }
  componentWillMount() {
    var heroes = [];
    this.props.favorites.favorites.map(favorite => heroes.push(favorite));
    this.setState({ searchHeroes: heroes });
  }
  searchHeroes(event) {
    var updatedList = this.props.favorites.favorites;
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

const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(mapStateToProps)(Favorites);
