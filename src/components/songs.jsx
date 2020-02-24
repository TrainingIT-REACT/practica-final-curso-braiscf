import React, { Component } from "react";
import Song from "./song";

class Songs extends Component {
  render() {
    return (
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Canción</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.map(song => (
            <Song key={song.id} song={song} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Songs;
