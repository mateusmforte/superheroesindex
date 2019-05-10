import styled from "styled-components";
import { textPrimaryColor } from "./utils/themecolors";
export const ProfileContainer = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 1fr 2fr 4fr 5fr;
	grid-template-areas:
		"name"
		"appearance"
		"biography"
		"status";
	padding: 5% 5%;
	grid-gap: 2%;
	height: 100%;
	overflow-y: overlay;
	font-family: "A typewriter for me";
	color: ${textPrimaryColor};
	/*   @media (min-width: 768px) {
    grid-template-columns: 18% 48% 28%;
    grid-template-rows: 10% 90%;
    grid-template-areas: "name name name" "appearance biography status";
    padding: 2%;
  } */
`;

/* HeroName */
export const NameArea = styled.div`
	grid-area: name;
`;
export const Name = styled.h1`
	font-family: "Play", sans-serif;
	text-align: center;
`;

/* HeroAppearance */

export const AppearanceArea = styled.div`
	grid-area: appearance;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeroImage = styled.img`
	width: 60%;
	box-shadow: 14px 11px 9px 7px rgba(0, 0, 0, 0.75);
	margin-bottom: 5%;
	@media (min-width: 768px) {
		width: 40%;
	}
`;

export const AddFavoriteButton = styled.button`
	grid-area: profile-options;
	align-self: center;
	border-radius: 100%;
	width: 60px;
	height: 60px;
	border: none;
	font-size: 36px;
	&:hover {
		transition: 0.2s;
		color: yellow;
		background-color: orange;
		box-shadow: 0px 0px 15px 5px yellow;
	}
	&:focus {
		outline: none;
	}
`;

/* Hero Biography */

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	align-content: space-between;
	& label {
		& span {
			margin-left: 2%;
			text-decoration: underline;
		}
	}
`;

export const BiographyArea = styled.div`
	grid-area: biography;
	line-height: 2.5em;
`;

export const AlterEgos = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const Aliases = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

/* HeroStatus */

export const StatusArea = styled.div`
	grid-area: status;
	display: flex;
	flex-direction: column;
	padding: 2%;
	margin-bottom: 16%;
	color: ${textPrimaryColor};
	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;
export const PowerTable = styled.tbody`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const PowerTableIcons = styled.tr`
	display: flex;
	width: 100%;
	justify-content: space-around;
`;

export const PowerTableText = styled.tr`
	display: flex;
	width: 100%;
	justify-content: space-around;
`;

export const PowerIcon = styled.img`
	width: 35px;
	margin-left: 9%;
`;
