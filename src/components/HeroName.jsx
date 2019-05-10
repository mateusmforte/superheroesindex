import React from "react";
import { NameArea, Name } from "../css/Profile";

export default class HeroName extends React.Component {
  render() {
    return (
      <NameArea>
        <Name>{this.props.heroname}</Name>
      </NameArea>
    );
  }
}
