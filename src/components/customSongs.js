import React from "react";
import { connect } from "react-redux";

const CustomSongs = ({ list }) => {
  return (
    <React.Fragment>
      {list.length > 0 ? (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Canción</th>
              <th>Veces escuchada</th>
            </tr>
          </thead>
          <tbody>
            {list
              .slice(0, 5)
              .sort()
              .map((song, id) => (
                <tr key={id}>
                  <td>{song.song.name}</td>
                  <td>{song.counter}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>Todavía no hay música recomenda</p>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state /*, otherProps */) => {
  return {
    list: state.musicList.list
  };
};

export default connect(mapStateToProps, () => ({}))(CustomSongs);
