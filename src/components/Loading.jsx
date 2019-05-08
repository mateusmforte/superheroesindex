import React from 'react';
import '../css/utils/common.css';
import styled from 'styled-components';

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
        const Loading = styled.div`
            align-self: center;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-family: "A typewriter for me";
        `;
        return(
            <Loading className="loading">
                <img src={require("../img/loading.gif")} alt="Loading" />
                <span className="loading-text">{this.props.text}</span>
            </Loading>
        )
    }
   
}