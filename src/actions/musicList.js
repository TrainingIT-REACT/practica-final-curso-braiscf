import types from "./types";

export const listenSong = songInfo => ({
  type: types.LISTEN_SONG,
  songInfo
});
