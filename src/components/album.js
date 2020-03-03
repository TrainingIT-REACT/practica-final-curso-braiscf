import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// Acciones
import { visitAlbum } from "../actions/albumList";

class Album extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(this.props.album.id);
    this.props.visitAlbum(this.props.album);
  }

  render() {
    return (
      <NavLink
        activeClassName="active"
        to={"/album/" + this.props.album.id}
        onClick={this.onClick}
      >
        {this.props.album.name}
      </NavLink>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  visitAlbum: content => dispatch(visitAlbum(content))
});

export default connect(() => ({}), mapDispatchToProps)(Album);
