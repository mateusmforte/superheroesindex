import React from 'react';

import '../css/utils/common.css';

export default class Loading extends React.Component{
    /* componentDidMount(props){
          const handleAuthentication = (nextState, replace) => {
            if (/access_token|id_token|error/.test(nextState.location.hash)) {
              this.props.auth.handleAuthentication();
            }
        }; 
        this.props.auth.handleAuthentication(props);
        localStorage.setItem('accessToken',this.props.auth.getAccessToken());
        localStorage.setItem('idToken',this.props.auth.getIdToken());
    } */
    render(){
        return(
            <div className="loading">
                <img src={require("../img/loading.gif")} alt="Loading" />
                <span className="loading-text">{this.props.text}</span>
            </div>
        )
    }
   
}