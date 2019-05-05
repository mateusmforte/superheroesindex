import React from "react";

import "../css/favorites.css";
import Search from "./Search";

export default class Favorites extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="favorites-container">
        <h1 className="favorites-title">My Favorites Heroes</h1>
        <Search/>
        <div className="favorites-list">
          <div className="favorite-hero">
            <i className="remove-button far fa-times-circle" />
            <img
              className="favorite-image"
              src={require("../img/img-profile-default.jpg")}
              alt=""
            />
            <span className="favorite-name">Hero name</span>
          </div>
          <div className="favorite-hero">
            <i className="remove-button far fa-times-circle" />
            <img
              className="favorite-image"
              src={require("../img/img-profile-default.jpg")}
              alt=""
            />
            <span className="favorite-name">Hero name</span>
          </div>
          <div className="favorite-hero">
            <i className="remove-button far fa-times-circle" />
            <img
              className="favorite-image"
              src={require("../img/img-profile-default.jpg")}
              alt=""
            />
            <span className="favorite-name">Hero name</span>
          </div>
          <div className="favorite-hero">
            <i className="remove-button far fa-times-circle" />
            <img
              className="favorite-image"
              src={require("../img/img-profile-default.jpg")}
              alt=""
            />
            <span className="favorite-name">Hero name</span>
          </div>
          <div className="favorite-hero">
            <i className="remove-button far fa-times-circle" />
            <img
              className="favorite-image"
              src={require("../img/img-profile-default.jpg")}
              alt=""
            />
            <span className="favorite-name">Hero name</span>
          </div>
        </div>
      </div>
    );
  }
}
