import types from "./types";

export const addSong = (song, counter) => ({
  type: types.ADD_SONG,
  counter,
  song
});

export const listenSong = index => ({
  type: types.LISTEN_SONG,
  index
});

export const clearSongs = () => ({
  type: types.CLEAR_SONGS
});
