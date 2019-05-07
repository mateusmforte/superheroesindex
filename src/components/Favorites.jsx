import React from "react";

import "../css/favorites.css";
import Search from "./Search";

export default class Favorites extends React.Component {
  constructor(props) {
    super();
    this.state = {
      favoritesHeroes: JSON.parse(localStorage.getItem("user")).favoritesHeroes
    };
    console.log(this.state.favoritesHeroes);
  }
  showProfile(id){
    window.location.pathname = `/profile/${id}`
  }
  render() {
    return (
      <div className="favorites-container">
        <h1 className="favorites-title">My Favorites Heroes</h1>
        <Search />
        <div className="favorites-list">
          {this.state.favoritesHeroes.map(hero => (
            <div className="favorite-hero" onClick={() => this.showProfile(hero.id)}>
              <i className="remove-button far fa-times-circle" />
              <img
                className="favorite-image"
                src={hero.img}
                alt=""
              />
              <span className="favorite-name">{hero.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
