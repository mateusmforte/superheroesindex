import React from "react";
import { connect } from "react-redux";
import * as ThemeActions from "../stores/actions/ThemeActions";
import {SettingsContainer,ThemeSettings,MarvelTheme,DCTheme} from '../css/Settings';
//var ACTUAL_USER_PREFERENCES = JSON.parse(localStorage.getItem('user'));
/*     changeThemePreferences(theme){
        var NEW_USER_PREFERENCES = ACTUAL_USER_PREFERENCES;
        
        NEW_USER_PREFERENCES.userPreferences.userTheme = theme; 
     
        localStorage.setItem('user',JSON.stringify(NEW_USER_PREFERENCES)); 
    } */

const Settings = ({toggleTheme}) => (
  <SettingsContainer>
    <ThemeSettings>
      <h3>Temas disponíveis</h3>
      <MarvelTheme onClick={() => toggleTheme("marvel")}>
        Marvel
      </MarvelTheme>
      <DCTheme onClick={() => toggleTheme("dc")}>DC</DCTheme>
    </ThemeSettings>
    </SettingsContainer>

);

const mapStateToProps = state => ({
    theme: state.theme
});
const mapDispatchToProps = dispatch => ({
    toggleTheme: (theme) => dispatch(ThemeActions.toggleTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
