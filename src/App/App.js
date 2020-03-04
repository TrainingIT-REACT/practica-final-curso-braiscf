import React, { Component } from "react";
import { Provider } from "react-redux";

// Contexto
import UserContext from "../contexts/user";

// Store
import store from "../store";

// Css
import "./App.css";
import NavBar from "../components/navBar";

class App extends Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      userName: "Pruebas",
      updateUser: this.updateUser
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("/albums");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  updateUser(signedIn, name) {
    this.setState(() => ({ signedIn: signedIn, userName: name }));
  }

  render() {
    return (
      <Provider store={store}>
        <UserContext.Provider value={this.state}>
          <div className="App">
            <React.StrictMode>
              <NavBar />
            </React.StrictMode>
          </div>
        </UserContext.Provider>
      </Provider>
    );
  }
}

export default App;
