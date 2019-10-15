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
    passwordError: ""
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
    console.log(username);
    this.setState({ username, rol, telefono, correo, password });
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
  submitHandler = e => {
    e.preventDefault();
    if (this.state.password == this.state.confpassword) {
      axios
        .put("https://localhost:44356/api/", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      const passwordError = "Las contraseñas deben coincidir";
      this.setState({ passwordError });
    }
    console.log(this.state);
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
