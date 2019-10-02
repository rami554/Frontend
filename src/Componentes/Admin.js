import React from "react";
import AgregarCine from "./AgregarCine";
import EditarCine from "./EditarCine";
import ListarCines from "./ListarCines";
class Admin extends React.Component {
  render() {
    if (localStorage.getItem("rol") == "1") {
      return (
        <div>
          ADMINISTRADOR DE CINES <br></br>
          <AgregarCine />
          <br></br>
          <EditarCine />
          <br></br>
          <ListarCines />
        </div>
      );
    } else {
      return <div>{this.props.history.push("/Login")}</div>;
    }
  }
}
export default Admin;
