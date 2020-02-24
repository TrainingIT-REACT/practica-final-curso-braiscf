import React, { Component } from "react";
import { connect } from "react-redux";

// Acciones
import { addSong } from "../actions/musicList";

class Song extends Component {
  render() {
    return (
      <React.Fragment key={this.props.song.id}>
        <tr>
          <td>{this.props.song.name}</td>
          <td>{this.props.song.seconds}</td>
          <td>
            <button className="btn btn-secondary btn-sm m-2" onClick>
              Play
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: content => dispatch(addSong(content))
});

export default connect(() => ({}), mapDispatchToProps)(Song);
