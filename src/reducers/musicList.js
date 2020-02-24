import types from "../actions/types";

// Estado inicial
const initialState = {
  list: []
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SONG:
      return {
        list: [
          ...state.list,
          {
            song: action.todo,
            counter: 1
          }
        ]
      };
    case types.LISTEN_SONG:
      return {
        list: [
          ...state.list.slice(0, action.index),
          {
            ...state.list[action.index].counter++
          },
          ...state.list.slice(action.index + 1)
        ]
      };
    case types.CLEAR_SONGS:
      return {
        list: []
      };
    default:
      return state;
  }
};

export default reducer;
