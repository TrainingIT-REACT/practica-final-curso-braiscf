import React from "react";

// Contexto de usuario
import UserContext from "./contexts/user";

// Este componente utiliza el parámetro para mostrarlo en la interfaz
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.userNameInput = React.createRef();
    this.state = {
      userName: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: this.userNameInput.current.value });
  }

  render() {
    const that = this;
    return (
      <UserContext.Consumer>
        {({ signedIn, userName, updateUser }) => {
          return (
            <div>
              {signedIn ? (
                <p>Usuario logueado {userName}</p>
              ) : (
                <>
                  <input
                    placeholder="Usuario"
                    type="text"
                    ref={this.userNameInput}
                    onChange={this.handleChange}
                  />

                  <button
                    className="btn btn-secondary btn-sm m-2"
                    onClick={() => updateUser(true, that.state.value)}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Login;
