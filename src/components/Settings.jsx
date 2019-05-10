import React from "react";
import { connect } from "react-redux";
import * as ThemeActions from "../Store/actions/ThemeActions";
import {
  SettingsContainer,
  ThemeSettings,
  MarvelTheme,
  DCTheme
} from "../css/Settings";

const Settings = ({ toggleTheme }) => (
  <SettingsContainer>
    <ThemeSettings>
      <h3>Temas disponíveis</h3>
      <MarvelTheme onClick={() => toggleTheme("marvel")}>Marvel</MarvelTheme>
      <DCTheme onClick={() => toggleTheme("dc")}>DC</DCTheme>
    </ThemeSettings>
  </SettingsContainer>
);

const mapStateToProps = state => ({
  theme: state.theme
});
const mapDispatchToProps = dispatch => ({
  toggleTheme: theme => dispatch(ThemeActions.toggleTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
