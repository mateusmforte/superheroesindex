import styled from "styled-components";

export const FavoritesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 3% 0;
`;

export const FavoritesTitle = styled.h1`
	display: none;
`;

export const FavoritesList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-auto-rows: 1fr;
	grid-gap: 5%;
	width: 76%;
	padding: 2% 5%;
	overflow-y: auto;
	overflow-x: hidden;
	align-self: center;
`;
