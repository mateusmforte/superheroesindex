import {STORE_DEFAULT_STATE} from "../StoreDefaultState";

const THEME_STATE = (!localStorage.getItem("user"))
  ? STORE_DEFAULT_STATE
  : JSON.parse(localStorage.getItem("user"));

export default function theme(state = THEME_STATE, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (THEME_STATE.theme !== action.newTheme) {
        THEME_STATE.theme = action.newTheme;
        console.log(THEME_STATE);
        localStorage.setItem("user", JSON.stringify(THEME_STATE));
      }
      return { ...state, theme: action.newTheme };
    default:
      return state;
  }
}
