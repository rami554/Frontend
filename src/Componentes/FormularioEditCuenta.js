import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  ButtonToolbar,
  Badge,
  Alert
} from "react-bootstrap";
class FormularioSign extends React.Component {
  state = {
    correo: "",
    telefono: "",
    username: "",
    password: "",
    confpassword: "",
    passwordError: "",
    correoError: "",
    telefonoError: "",
    usernameError: "",
    id: ""
  };
  componentDidMount() {
    this.setState(this.passwordError);
    if (localStorage.getItem("isLogged")) {
      this.getData();
    }
  }
  getData() {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const username = data[0].username;
    const telefono = data[0].phone_number;
    const correo = data[0].email;
    const password = data[0].password;
    const rol = data[0].rol;
    const id = data[0].user_id;
    console.log(username);
    this.setState({ username, rol, telefono, correo, password, id });
  }
  logout() {
    if (!this.state.isLogged) {
      this.props.history.push("/");
    }
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validar() {
    let passwordError;
    let usernameError;
    let telefonoError;
    let correoError;
    if (this.state.password != this.state.confpassword) {
      passwordError = "Las contraseñas deben ser iguales";
    }
    if (!this.state.username) {
      usernameError = "Este campo no puede estar vacio";
    }
    if (!this.state.telefono) {
      telefonoError = "Este campo no puede estar vacio";
    }
    if (!this.state.correo) {
      correoError = "Este campo no puede estar vacio";
    }
    if (!this.state.password) {
      passwordError = "Este campo no puede estar vacio";
    }
    if (passwordError || usernameError || correoError || telefonoError) {
      this.setState({
        passwordError,
        usernameError,
        correoError,
        telefonoError
      });
      return false;
    }
    return true;
  }
  submitHandler = e => {
    e.preventDefault();
    let isValid = this.validar();
    if (isValid) {
      const id = this.state.id;
      console.log(id);
      axios
        .put(`https://localhost:44356/api/CustomUser/${id}`, {
          username: this.state.username,
          password: this.state.password,
          phone_number: this.state.telefono,
          email: this.state.email
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    if (localStorage.getItem("isLogged") == "true") {
      return (
        <div>
          EDITAR TU CUENTA
          <form onSubmit={this.submitHandler}>
            <br></br>
            <h5>
              <Badge variant='primary'>Correo Electronico</Badge>
            </h5>
            <input
              type='mail'
              name='correo'
              placeholder='Correo'
              value={this.state.correo}
              onChange={e => this.change(e)}
            ></input>
            <h5>
              <Badge variant='primary'>Número de telefono</Badge>
            </h5>
            <input
              type='number'
              name='telefono'
              placeholder='Telefono'
              value={this.state.telefono}
              onChange={e => this.change(e)}
            ></input>
            <h5>
              <Badge variant='primary'>Username</Badge>
            </h5>
            <input
              name='username'
              placeholder='Nombre de Usuario'
              value={this.state.username}
              onChange={e => this.change(e)}
            ></input>
            <h5>
              <Badge variant='primary'>Contraseña</Badge>
            </h5>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={e => this.change(e)}
            ></input>
            <h5>
              <Badge variant='primary'>Confirmar contraseña</Badge>
            </h5>
            <input
              type='password'
              name='confpassword'
              placeholder='Confirmar password'
              value={this.state.confpassword}
              onChange={e => this.change(e)}
            ></input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button type='submit'>Actualizar datos</button>
          </form>
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
export default FormularioSign;
