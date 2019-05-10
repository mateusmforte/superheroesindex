import { createStore } from "redux";
//import { loadState, saveState } from "./localStorage";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Reducers } from "./reducers/Reducers";
const persistConfig = {
	key: "user",
	storage
};

const persistedReducer = persistReducer(persistConfig, Reducers);
const Store = createStore(persistedReducer);
const Persistor = persistStore(Store);

export { Store, Persistor };
