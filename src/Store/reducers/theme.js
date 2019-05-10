const INITIAL_STATE = {
    theme: 'dc'
}

export default function theme(state = INITIAL_STATE , action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {...state ,theme: action.newTheme };
    default:
      return state;
  }
}
