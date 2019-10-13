import React from "react";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  rol: "",
  usernameError: "",
  passwordError: ""
};

class FormularioLogin extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getdata() {
    const datos = JSON.parse(localStorage.getItem("data"));
    localStorage.setItem("rol", datos[0].rol_id);
    localStorage.setItem("isLogged", "true");
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
        .then(() => {
          if (localStorage.getItem("rol") == "2") {
            this.props.history.push("/perfil");
          }
          if (localStorage.getItem("rol") == "1") {
            this.props.history.push("/admin");
          }
        })
        .catch(error => {
          console.log(error);
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
            <br></br>
            <br></br>
            <button type='submit'>Iniciar Sesión</button>
          </form>
        </div>
      );
    } else {
      return <div>{(this.props.history.push("/"), localStorage.clear())}</div>;
    }
  }
}
export default FormularioLogin;
