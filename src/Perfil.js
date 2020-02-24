import React from "react";
import { connect } from "react-redux";

// Componentes
import UpdateName from "./UpdateName";

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Perfil = ({ name }) => {
  return (
    <div>
      <h2>
        Perfil del usuario {name != null && name !== "" ? name : "DESCONOCIDO"}
      </h2>
      <UpdateName />
    </div>
  );
};

const mapStateToProps = (state /*, otherProps */) => {
  return {
    name: state.user.name
  };
};

export default connect(mapStateToProps, () => ({}))(Perfil);
