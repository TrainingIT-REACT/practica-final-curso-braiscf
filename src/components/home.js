import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

//Componentes
import Songs from "./songs";
import CustomSongs from "./customSongs";

// Acciones
import { getSongs } from "../actions/songs";

const initialState = {
  loading: true,
  songs: []
};

class Home extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }

  renderSongs() {
    const { isLoading, error, songs } = this.props.songs;

    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return <Songs songs={songs} />;
    }
  }

  // Corregir key de la lista
  render() {
    return (
      <React.Fragment>
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          <h1>Música Recomendada:</h1>
          <CustomSongs />
          <h1>Toda la Música</h1>
          {this.renderSongs()}
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
