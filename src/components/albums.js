import React, { Component } from "react";
import Loader from "react-loader-spinner";
import ErrorBoundary from "../ErrorBoundary";
import Album from "./album";
import { connect } from "react-redux";

// Acciones
import { getAlbums } from "../actions/albums";

//Componentes
import CustomAlbum from "./customAlbum";

const initialState = {
  loading: true,
  albums: []
};

class Albums extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }

  renderAlbums() {
    const { isLoading, error, albums } = this.props.albums;

    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return (
        <React.Fragment>
          <h2>Album</h2>

          {albums.map(album => (
            <p key={album.id}>
              <Album key={album.id} album={album} />
            </p>
          ))}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          <h1>Albums visitados:</h1>
          <CustomAlbum />
          <h1>Albums:</h1>
          {this.renderAlbums()}
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
