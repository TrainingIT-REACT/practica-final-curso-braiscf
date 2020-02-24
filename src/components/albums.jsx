import React, { Component } from "react";
import Loader from "react-loader-spinner";
import ErrorBoundary from "../ErrorBoundary";
import Album from "./album";

const initialState = {
  loading: true,
  albums: []
};

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
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

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }

  render() {
    return (
      <React.Fragment>
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          <h1>Albums:</h1>
          {this.state.loading ? (
            <Loader />
          ) : (
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {this.state.albums.map(album => (
                  <Album key={album.id} album={album} />
                ))}
              </tbody>
            </table>
          )}
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
