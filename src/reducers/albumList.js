import types from "../actions/types";

// Estado inicial
const initialState = {
  listAlbum: []
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VISIT_ALBUM:
      let index = state.listAlbum.findIndex(
        e => e.album.id === action.albumInfo.id
      );
      if (index > -1) {
        return {
          listAlbum: [
            ...state.listAlbum.slice(0, index),
            {
              ...state.listAlbum[index],
              counter: state.listAlbum[index].counter + 1
            },
            ...state.listAlbum.slice(index + 1)
          ]
        };
      } else {
        return {
          listAlbum: [
            ...state.listAlbum,
            {
              album: action.albumInfo,
              counter: 1
            }
          ]
        };
      }
    default:
      return state;
  }
};

export default reducer;
