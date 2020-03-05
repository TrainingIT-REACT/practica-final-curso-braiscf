import React from "react";
import { connect } from "react-redux";

//Componentes
import Songs from "./songs";

import Home from "./home";

const AlbumDetail = ({ history, match, songs, albums }) => {
  const albumById = albums.filter(
    album => album.id === parseInt(match.params.id)
  )[0];
  const songsList = songs.filter(
    song => song.album_id === parseInt(match.params.id)
  );

  const cover = require('../../server/static' + albumById.cover);

  const goBack = e => {
    // Evitamos que evento de navegación continue
    e.preventDefault();
    // Atrás!
    history.goBack();
  };

  const getDuration = album => {
    var time = 0;
    songsList.map(song => {
      if (song.album_id === album) {
        time = time + parseInt(song.seconds);
      }
      return null;
    });
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return minutes + "' " + seconds + '"';
  };

  return (
    <div>
      {match.params.id != null ? (
        <React.Fragment>
          <button className="btn btn-secondary btn-sm m-2" onClick={goBack}>
            Atrás
          </button>
          <p></p>
          Detalle del album <b>{albumById.name}</b>!
          <p>
            Nombre:
            <b>{albumById.name}</b>
          </p>
          <p>
            Cover:
            <img src={cover.default} height="42" width="42" alt="cover"></img>
          </p>
          <p>
            Artista:
            <b>{albumById.artist}</b>
          </p>
          <p>
            Duracion:
            <b>{getDuration(albumById.id)}</b>
          </p>
          Canciones:
          <Songs songs={songsList} />
        </React.Fragment>
      ) : (
          <Home />
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.albums.albums,
    songs: state.songs.songs
  };
};

export default connect(mapStateToProps, () => ({}))(AlbumDetail);
