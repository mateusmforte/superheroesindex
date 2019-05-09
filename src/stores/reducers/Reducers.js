import { combineReducers } from 'redux';
import theme from './ThemeReducer';
import favorites from './FavoritesReducer';
export const STORE_INITIAL_STATE = {
    username: "Mateus",
    favorites: [],
    theme: "dc"
};
export const Reducers = combineReducers({
    theme,
    favorites
});