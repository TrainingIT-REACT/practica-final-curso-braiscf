import { createContext } from "react";

const UserContext = createContext({
  signedIn: false,
  userName: "Pruebas",
  updateUser: () => {}
});

export default UserContext;
