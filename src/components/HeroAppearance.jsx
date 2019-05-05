import React from "react";

export default class HeroAppearance extends React.Component {
  render() {
    return (
      <div className="appearance-area">
        <section id="appearance">
          <img src={this.props.heroimage} alt="Hero Profile" />
          <button id="favorite-button">
              <i class="fas fa-star" />
            </button>
        </section>
      </div>
    );
  }
}
