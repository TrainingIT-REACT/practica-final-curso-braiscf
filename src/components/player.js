import React from "react";

import { connect } from "react-redux";


const Player = ({ history, listenSong }) => {
  const goBack = e => {
    // Evitamos que evento de navegación continue
    e.preventDefault();
    // Atrás!
    history.goBack();
  };

  const song = require("../../server/static" + listenSong.audio);

  return (
    <React.Fragment>
      <h1>Reproductor mp3 </h1>
      <button className="btn btn-secondary btn-sm m-2" onClick={goBack}>
        Atrás
      </button>
      <p></p>
      <audio src={song.default} controls autoPlay></audio>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    listenSong: state.musicList.listenSong
  };
};

export default connect(mapStateToProps, () => ({}))(Player);
