import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Acciones
import { listenSong } from "../actions/musicList";

const PlaySong = ({ song, listenSong }) => {
  const onClick = e => {
    listenSong({
      song
    });
  };

  return (
    <NavLink
      className="btn btn-secondary btn-sm m-2"
      activeClassName="active"
      to={"/player"}
      onClick={onClick}
    >
      Play
    </NavLink>
  );
};

const mapDispatchToProps = dispatch => ({
  listenSong: content => dispatch(listenSong(content))
});

export default connect(() => ({}), mapDispatchToProps)(PlaySong);
