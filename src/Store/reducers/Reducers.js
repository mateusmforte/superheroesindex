import { combineReducers } from "redux";
import theme from "./theme";
import favorites from "./favorites";

export const Reducers = combineReducers({
	theme,
	favorites
});
