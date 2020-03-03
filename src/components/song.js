import React from "react";

//Componentes
import PlaySong from "./playSong";

const Song = ({ song }) => {
  return (
    <React.Fragment key={song.id}>
      <tr>
        <td>{song.name}</td>
        <td>{song.seconds}</td>
        <td>
          <PlaySong song={song} />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Song;
