import React, { createRef } from "react";
import { connect } from "react-redux";

// Acciones
import { updateName } from "../actions/user";

const UpdateName = ({ updateName }) => {
  const input = createRef();

  const onSubmit = e => {
    e.preventDefault();
    updateName(input.current.value);
    input.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">¿Cuál es tu nombre?</label>
        <input
          id="name"
          type="text"
          ref={input}
          placeholder="Nombre de Usuario..."
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Actualizar nombre</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(updateName(name))
});

export default connect(() => ({}), mapDispatchToProps, UpdateName);
