import React from "react";
import FormularioEditCuenta from "./FormularioEditCuenta";

class Perfil extends React.Component {
  state = { username: "", rol: "" };
  componentWillMount() {}
  componentDidMount() {
    console.log("se ha montado");
    console.log("Se va a montar");
    if (localStorage.getItem("rol" == 2)) {
      this.getData();
    }
  }
  getData() {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const username = data[0].username;
    const rol = data[0].rol;
    console.log(username);
    this.setState({ username, rol });
  }
  logout() {
    if (!this.state.isLogged) {
      this.props.history.push("/");
    }
  }
  render() {
    if (localStorage.getItem("isLogged") == "true") {
      return (
        <div>
          <div>Bienvenido {this.state.username} !</div>
          <div>
            <FormularioEditCuenta />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {
            (console.log("cerrando sesion"),
            localStorage.clear(),
            this.logout())
          }
        </div>
      );
    }
  }
}

export default Perfil;
