const INITIAL_STATE = {
	favorites: []
};

export default function favorites(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_FAVORITE":
		return { ...state, favorites: [...state.favorites, action.newFavorite] };
	case "REMOVE_FAVORITE":
		return {
			favorites: state.favorites.filter(item => item.id !== action.removed)
		};
	default:
		return state;
	}
}
