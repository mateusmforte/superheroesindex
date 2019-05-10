import styled from "styled-components";
import { primaryColor } from "./utils/themecolors";
export const ListContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 8% 0;
	@media (min-width: 768px) {
		padding: 2% 0;
	}
`;

export const HeroesList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: 90%;
	padding: 0;
	overflow: auto;
	.hero-list-name {
		padding: 3%;
		border-radius: 30px;
		list-style-type: none;
		font-size: 1.5em;
		text-decoration: none;
		font-family: "Fjalla One", sans-serif;
		margin-bottom: 3%;
		width: 85%;
		background-color: ${primaryColor};
		text-shadow: 0 0 10px ${primaryColor};
		box-shadow: 0 0 25px 0 ${primaryColor}, 0 20px 10px 0 rgba(0, 0, 0, 0.2);
		color: white;
	}
	@media (min-width: 768px) {
		width: 60%;
	}
`;
