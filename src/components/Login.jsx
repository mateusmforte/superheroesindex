import React from 'react';

export default class Login extends React.Component{
    login() {
        this.props.auth.login();
      }
    
    logout() {
    this.props.auth.logout();
    }
    
    render(){
        return(
            <div className="no-user-loged">
                <h1>Super Hero Index</h1>
                <p>Faça o seu login para ter acesso as informações secretas de todos os heróis.</p>
                <button onClick={this.login.bind(this)}>Login</button>
                <button>Cadastrar-se</button>
            </div>
        );
    }
}