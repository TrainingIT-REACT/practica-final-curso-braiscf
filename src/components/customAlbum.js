import React from "react";

import { connect } from "react-redux";

const CustomAlbum = ({ listAlbum }) => {
  return (
    <React.Fragment>
      {listAlbum.length > 0 ? (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Album</th>
              <th>Veces visitado</th>
            </tr>
          </thead>
          <tbody>
            {listAlbum
              .slice(0, 5)
              .sort()
              .map((album, id) => (
                <tr key={id}>
                  <td>{album.album.name}</td>
                  <td>{album.counter}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>Todavía no hay albumnes visitados</p>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state /*, otherProps */) => {
  return {
    listAlbum: state.albumList.listAlbum
  };
};

export default connect(mapStateToProps, () => ({}))(CustomAlbum);
