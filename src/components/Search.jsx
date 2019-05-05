import React from "react";
import "../css/utils/search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <input
          id="search-input"
          type="search"
          placeholder="Pesquisar heroi"
          onChange={this.props.onChange}
        />
        <div className="search" />
      </div>
    );
  }
}
