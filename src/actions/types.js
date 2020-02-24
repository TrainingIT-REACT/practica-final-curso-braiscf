// Definimos la lista de acciones
const actions = [
  //SONGS
  "ADD_SONG",
  "LISTEN_SONG",
  "CLEAR_SONGS",

  // Usuarios
  "UPDATE_NAME"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
