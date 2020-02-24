import React, { Component } from "react";

class Album extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.album.name}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Album;
