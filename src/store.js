import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

// Reducers
import user from "./reducers/user";
import musicList from "./reducers/musicList";
import songs from "./reducers/songs";
import albums from "./reducers/albums";
import albumList from "./reducers/albumList";

export default createStore(
  combineReducers({ user, musicList, songs, albums, albumList }),
  applyMiddleware(promise)
);
