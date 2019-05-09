import { createStore } from "redux";
import { Reducers } from "./reducers/Reducers";
import {STORE_DEFAULT_STATE} from "./StoreDefaultState";

if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify(STORE_DEFAULT_STATE));
}

export const Store = createStore(Reducers);
