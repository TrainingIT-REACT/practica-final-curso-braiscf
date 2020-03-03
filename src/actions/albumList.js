import types from "./types";

export const visitAlbum = albumInfo => ({
  type: types.VISIT_ALBUM,
  albumInfo
});
