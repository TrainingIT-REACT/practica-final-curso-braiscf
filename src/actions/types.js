// Definimos la lista de acciones
const actions = [
  //SONGS
  "LISTEN_SONG",

  //ALBUMS
  "VISIT_ALBUM",

  // Usuarios
  "UPDATE_NAME"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
