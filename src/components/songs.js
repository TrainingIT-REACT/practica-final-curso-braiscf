import React from "react";
import Song from "./song";

const Songs = ({ songs }) => {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Canción</th>
          <th>Duración</th>
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <Song key={song.id} song={song} />
        ))}
      </tbody>
    </table>
  );
};

export default Songs;
