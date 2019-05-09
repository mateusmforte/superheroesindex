const INITIAL_STATE = {
    favoritesHeroes: [],
}

export default function favorites(state = INITIAL_STATE,action){
    console.log(action);
    return state;
}