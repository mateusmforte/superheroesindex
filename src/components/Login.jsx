import React from "react";
import {
	LoginContent,
	LoginHeader,
	LoginImage,
	LoginHeaderText,
	LoginHeaderMessage,
	LoginButton
} from "../css/Login";
export default class Login extends React.Component {
	login() {
		this.props.auth.login();
	}

	logout() {
		this.props.auth.logout();
	}

	render() {
		return (
			<LoginContent>
				<LoginHeader>
					<LoginImage src={require("../img/icons/superheroemote.png")} />
					<LoginHeaderText>Super Hero Index</LoginHeaderText>
					<LoginHeaderMessage>
						Faça o seu login para ter acesso as informações secretas de todos os
						heróis.
					</LoginHeaderMessage>
					<LoginButton onClick={this.login.bind(this)}>Login</LoginButton>
				</LoginHeader>
			</LoginContent>
		);
	}
}
