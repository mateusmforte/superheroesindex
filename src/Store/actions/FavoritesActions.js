export const addFavorite = favorite => ({
	type: "ADD_FAVORITE",
	newFavorite: favorite
});

export const removeFavorite = favoriteid => ({
	type: "REMOVE_FAVORITE",
	removed: favoriteid
});
