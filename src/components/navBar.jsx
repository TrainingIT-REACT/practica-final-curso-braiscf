import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";

//Componentes
import Login from "../Login";
import Perfil from "../Perfil";
import PrivateRoute from "../PrivateRouter";

const Home = React.lazy(() => import("./home"));
const Albums = React.lazy(() => import("./albums"));

// Rutas anidadas
const AboutMe = () => <p>Mi nombre es Ángel!</p>;
const AboutCourse = () => <p>Bienvenido o Bienvenida a este curso de React!</p>;

// Este componente define rutas anidadas
const About = ({ match }) => (
  <div>
    <p>Este ejemplo trata sobre React Router</p>
    <p>
      <NavLink activeClassName="active" to={`${match.url}/me`}>
        Sobre mi
      </NavLink>{" "}
      <NavLink activeClassName="active" to={`${match.url}/course`}>
        Sobre este curso
      </NavLink>
    </p>
    <Route path={`${match.url}/me`} component={AboutMe} />
    <Route path={`${match.url}/course`} component={AboutCourse} />
  </div>
);

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/"
                  className="nav-link"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/albums"
                  className="nav-link"
                >
                  Albums
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/about"
                  className="nav-link"
                >
                  Reproductor
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/login"
                  className="nav-link"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/perfil"
                  className="nav-link"
                >
                  Perfil
                </NavLink>
              </li>
            </ul>
          </nav>

          <React.Suspense fallback={<Loader />}>
            <Route path="/" exact component={Home} />
          </React.Suspense>
          <React.Suspense fallback={<Loader />}>
            <Route path="/albums" component={Albums} />
          </React.Suspense>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/perfil" component={Perfil} />
        </div>
      </Router>
    );
  }
}
