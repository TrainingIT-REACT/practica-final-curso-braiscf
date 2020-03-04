import React from "react";
import { connect } from "react-redux";

// Componentes
import UpdateName from "./updateName";

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

const mapStateToProps = state => {
  return {
    name: state.user.name
  };
};

export default connect(mapStateToProps, () => ({}))(Perfil);
