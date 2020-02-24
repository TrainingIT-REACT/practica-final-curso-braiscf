import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "react-loader-spinner";
import Songs from "./songs";

const initialState = {
  loading: true,
  songs: []
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  async componentDidMount() {
    try {
      const res = await fetch("/songs");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        songs: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }

  // Corregir key de la lista
  render() {
    return (
      <React.Fragment>
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          <h1>Música Recomendada:</h1>
          {this.state.loading ? <Loader /> : <Songs songs={this.state.songs} />}
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
