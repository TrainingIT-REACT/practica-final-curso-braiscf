import types from "../actions/types";

// Estado inicial
const initialState = {
  name: "",
  signedIn: false
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return {
        name: action.name
      };
    default:
      return state;
  }
};

export default reducer;
