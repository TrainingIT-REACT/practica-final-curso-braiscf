import types from "../actions/types";

// Estado inicial
const initialState = {
  list: [],
  listenSong: {}
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Si la cancion no esta en la lista de canciones escuchadas, se anhade, se aumenta el valor del contador y se anhade la cacion a listenSong,
    //Si la cancion esta en la lista, se aumenta el valor del contador y se anhade la cancion a listenSong
    case types.LISTEN_SONG:
      let index = state.list.findIndex(
        todo => todo.song.id === action.songInfo.song.id
      );
      if (index > -1) {
        return {
          list: [
            ...state.list.slice(0, index),
            {
              ...state.list[index],
              counter: state.list[index].counter + 1
            },
            ...state.list.slice(index + 1)
          ],
          listenSong: action.songInfo.song
        };
      } else {
        return {
          list: [
            ...state.list,
            {
              song: action.songInfo.song,
              counter: 1
            }
          ],
          listenSong: action.songInfo.song
        };
      }
    default:
      return state;
  }
};

export default reducer;
