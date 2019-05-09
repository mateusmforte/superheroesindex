import React from 'react';

var ACTUAL_USER_PREFERENCES = JSON.parse(localStorage.getItem('user'));

class ThemeSettings extends React.Component{
    constructor(props){
        super();
        this.changeThemePreferences = this.changeThemePreferences.bind(this);
    }
    changeThemePreferences(theme){
        var NEW_USER_PREFERENCES = ACTUAL_USER_PREFERENCES;
        
        NEW_USER_PREFERENCES.userPreferences.userTheme = theme; 
     
        localStorage.setItem('user',JSON.stringify(NEW_USER_PREFERENCES)); 
    }
    render(){
        return(
            <div>
                <h3>Temas disponíveis:</h3>
                <button onClick={() => this.changeThemePreferences('marvel')}>Marvel</button>
                <button onClick={() => this.changeThemePreferences('dc')}>DC</button>
            </div>
        )
    }
}

export default class Settings extends React.Component{
    constructor(){
        super();
        this.state = {
            userPreferences : JSON.parse(localStorage.getItem('user')).userPreferences
        }
    }
    render(){
        return(
            <div className="settings-container">
                <ThemeSettings/>
            </div>
        )
    }


}