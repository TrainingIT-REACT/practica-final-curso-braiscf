import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//Componentes
import Login from "./login";

// Lazy components
const Perfil = React.lazy(() => import('./perfil'));

import PrivateRouter from "../PrivateRoute";
import AlbumDetail from "./albumDetail";
import Player from "./player";

import Home from "./home";
import Albums from "./albums";
import Loader from "react-loader-spinner";

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

          <Route path="/" exact component={Home} />

          <Route path="/albums" exact component={Albums} />

          <Route path="/login" exact component={Login} />
          <Route path="/album/:id" component={AlbumDetail} />
          <Route path="/player" exact component={Player} />
          <React.Suspense fallback={Loader}>
            <PrivateRouter path="/perfil" exact component={Perfil} />
          </React.Suspense>
        </div>
      </Router >
    );
  }
}
