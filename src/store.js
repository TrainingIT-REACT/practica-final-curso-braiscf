import { createStore, combineReducers } from "redux";

// Reducers
import user from "./reducers/user";
import musicList from "./reducers/musicList";

export default createStore(combineReducers({ user, musicList }));
