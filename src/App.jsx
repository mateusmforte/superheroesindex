import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import { connect } from "react-redux";

/* if (!localStorage.getItem("user")) {
  const user = {
    email: "m-forte@hotmail.com",
    favoritesHeroes: [],
    userPreferences: {
      userTheme: "dc"
    }
  };
  localStorage.setItem("user", JSON.stringify(user));
}

const USER_PREFERENCES = JSON.parse(localStorage.getItem("user"))
  .userPreferences;
 */
class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

export default connect(mapStateToProps)(App);
