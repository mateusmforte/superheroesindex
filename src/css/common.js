import "./utils/reset.css";
import "./utils/common.css";
import styled from "styled-components";
import { secondaryColor, textPrimaryColor } from "./utils/themecolors";

export const HeaderContent = styled.div`
	height: 10%;
	width: 100%;
	padding: 0;
	position: fixed;
	bottom: 0;
	z-index: 3;
	@media (min-width: 768px) {
		height: 100%;
		width: 10%;
		margin-right: auto;
	}
`;

export const MainContent = styled.div`
	width: 100%;
	padding: 0 4%;
	display: flex;
	flex-direction: column;
	background-color: ${secondaryColor};
	color: ${textPrimaryColor};
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar {
		width: 6px;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: red;
	}
	@media (min-width: 768px) {
		width: 89%;
		padding: 1%;
		margin-left: 10%;
	}
`;
