import React from "react";
import styled from "styled-components";

export default class Error extends React.Component {
	render() {
		const ErrorContent = styled.div`
			align-self: center;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
			font-family: "A typewriter for me";
			text-align: center;
		`;

		const ErrorIcon = styled.img`
			width: 94px;
		`;

		const ErrorMsg = styled.p`
			padding: 0 10%;
			text-align: center;
			line-height: 1.5em;
		`;

		return (
			<ErrorContent>
				{this.props.error === "connection" && (
					<div>
						<ErrorIcon
							src={require("../img/icons/kryptonita-591633.png")}
							alt="kriptonita"
						/>
						<ErrorMsg>
							{" "}
							Parece que jogaram uma Kriptonida em nosso servidor, tente
							novamente mais tarde. Se o problema persistir, chame a Capitã
							Marvel!
						</ErrorMsg>
					</div>
				)}
				{this.props.error === "notfound" && (
					<div>
						<ErrorIcon
							src={require("../img/icons/groot.png")}
							alt="kriptonita"
						/>
						<ErrorMsg>Nenhum herói encontrado!</ErrorMsg>
					</div>
				)}
				{this.props.error === "nofavorites" && (
					<div>
						<ErrorIcon
							src={require("../img/icons/groot.png")}
							alt="kriptonita"
						/>
						<ErrorMsg>
							Parece que você não adicionou nenhum herói como favorito ainda.
						</ErrorMsg>
					</div>
				)}
			</ErrorContent>
		);
	}
}
