import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  username: "",
  password: "",
  rol: "",
  usernameError: "",
  passwordError: "",
  genError: ""
};

class FormularioLogin extends React.Component {
  state = initialState;
  componentDidMount() {
    if (localStorage.getItem("cuentaCreada")) {
      this.notify("Cuenta Creada Exitosamente!");
      localStorage.removeItem("cuentaCreada");
    }
    if (localStorage.getItem("np")) {
      this.notify("Password cambiado exitosamente!");
      localStorage.removeItem("np");
    }
  }
  notify = texto => toast(texto);
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getdata() {
    const datos = JSON.parse(localStorage.getItem("data"));
    localStorage.setItem("rol", datos[0].rol_id);
    localStorage.setItem("isLogged", true);
    const rols = datos[0].rol_id;
    console.log(rols);
  }

  validar = () => {
    let usernameError = "";
    let passwordError = "";

    if (!this.state.password) {
      passwordError = "Este campo no puede estar vacio";
    }
    if (!this.state.username) {
      usernameError = "Este campo no puede estar vacio";
    }
    if (usernameError || passwordError) {
      this.setState({ passwordError, usernameError });
      return false;
    }
    return true;
  };

  submitHandler = e => {
    e.preventDefault();
    const esValido = this.validar();
    if (esValido) {
      axios
        .post("https://localhost:44356/api/myLogin", {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => localStorage.setItem("data", res.data))
        .then(this.getdata)
        .then(localStorage.setItem("init", true))
        .then(() => {
          if (localStorage.getItem("rol") == "2") {
            this.props.history.push("/perfil");
          }
          if (localStorage.getItem("rol") == "1") {
            this.props.history.push("/admin");
          }
        })
        .catch(error => {
          const genError = error.response.data.Message;
          console.log(genError);
          this.setState({ genError });
        });
      this.setState(initialState);
    }
  };
  render() {
    if (localStorage.getItem("rol") == null) {
      return (
        <div>
          INICIAR SESION
          <form onSubmit={this.submitHandler}>
            <div>
              <br></br>
              <input
                type='text'
                name='username'
                placeholder='Nombre de Usuario'
                value={this.state.username}
                onChange={e => this.change(e)}
              />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
            <br></br>
            <div>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={e => this.change(e)}
              ></input>
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.genError}
            </div>
            <Link to='/recpass'>Olvidaste tu contraseña?</Link>
            <br></br>
            <button type='submit'>Iniciar Sesión</button>
          </form>
          <ToastContainer />
        </div>
      );
    } else {
      return <div>{(this.props.history.push("/"), localStorage.clear())}</div>;
    }
  }
}
export default FormularioLogin;
