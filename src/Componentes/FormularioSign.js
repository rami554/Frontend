import React from "react";
import axios from "axios";
import Header from "../components/Header";

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from "react-bootstrap";

const initialState = {
  ci: "",
  nombre: "",
  apellido: "",
  genero: "Hombre",
  correo: "",
  fecha_nac: "",
  telefono: "",
  username: "",
  password: "",
  ciError: "",
  nombreError: "",
  apellidoError: "",
  correoError: "",
  telefonoError: "",
  usernameError: "",
  passwordError: "",
  fecha_nacError: "",
  genError: ""
};
class FormularioSign extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validar = () => {
    let ciError = "";
    let nombreError = "";
    let apellidoError = "";
    let correoError = "";
    let telefonoError = "";
    let usernameError = "";
    let passwordError = "";
    let fecha_nacError = "";

    if (!this.state.ci) {
      ciError = "Este campo no puede estar vacio";
    }
    if (!this.state.nombre) {
      nombreError = "Este campo no puede estar vacio";
    }
    if (!this.state.apellido) {
      apellidoError = "Este campo no puede estar vacio";
    }
    if (!this.state.correo) {
      correoError = "Este campo no puede estar vacio";
    }
    if (!this.state.telefono) {
      telefonoError = "Este campo no puede estar vacio";
    }
    if (!this.state.fecha_nac) {
      fecha_nacError = "Ingrese fecha de nacimiento";
    }
    if (!this.state.password) {
      passwordError = "Este campo no puede estar vacio";
    }
    if (!this.state.username) {
      usernameError = "Este campo no puede estar vacio";
    }
    if (!this.state.fecha_nac) {
      fecha_nacError = "Este campo no puede estar vacio";
    }
    if (this.state.password.length < 5 && this.state.password) {
      passwordError = "El password debe tener al menos 5 caracteres";
    }
    if (this.state.username.length < 4 && this.state.password) {
      usernameError = "El nombre de usuario debe tener al menos 4 caracteres";
    }

    if (
      usernameError ||
      passwordError ||
      ciError ||
      nombreError ||
      correoError ||
      apellidoError ||
      telefonoError ||
      fecha_nacError
    ) {
      this.setState({
        passwordError,
        usernameError,
        ciError,
        apellidoError,
        nombreError,
        correoError,
        telefonoError,
        fecha_nacError
      });
      return false;
    }
    return true;
  };
  submitHandler = e => {
    e.preventDefault();
    let esValido = this.validar();
    console.log(this.state.fecha_nac);
    if (esValido) {
      axios
        .post("https://localhost:44356/api/myUser", {
          document: this.state.ci,
          first_name: this.state.nombre,
          last_name: this.state.apellido,
          gender: this.state.genero,
          email: this.state.correo,
          birth_date: this.state.fecha_nac,
          phone_number: this.state.telefono,
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
          localStorage.setItem("cuentaCreada", true);
          this.props.history.push("/login");
        })
        .catch(error => {
          const genError = error.response.data.Message;
          console.log(genError);
          this.setState({ genError });
        });
      console.log(this.state);
    }
  };

  render() {
    return (
      <Container>
      <Form ><Header />
        <h3>CREA TU CUENTA</h3>
        <form onSubmit={this.submitHandler}>
        <FormGroup row>
          <Col sm={6}>
          <Input
            name='ci'
            type='number'
            placeholder='C.I'
            value={this.state.ci}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>{this.state.ciError}</div>
          </Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Input
            name='nombre'
            placeholder='Nombre'
            value={this.state.nombre}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nombreError}
          </div></Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Input
            name='apellido'
            placeholder='Apellido'
            value={this.state.apellido}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.apellidoError}
          </div></Col></FormGroup>

          <Label>Género</Label>
          <FormGroup row>
          <Col sm={6}>
          <Input type="select">
            name='genero'
            value={this.state.genero}
            onChange={e => this.change(e)}
          >
            <option value='Hombre'>Hombre</option>
            <option value='Mujer'>Mujer</option>
            <option value='Otro'>Otro</option>
          </Input></Col></FormGroup>

          <FormGroup row>
          <Col sm={6}>
          <Input
            type='email'
            name='correo'
            placeholder='Correo'
            value={this.state.correo}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.correoError}
          </div></Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Label>Fecha de nacimiento</Label>
          <Input
            name='fecha_nac'
            type='date'
            selected={this.state.startDate}
            placeholder='Fecha de nac'
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.fecha_nacError}
          </div></Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Input
            type='number'
            name='telefono'
            placeholder='Telefono'
            value={this.state.teléfono}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.telefonoError}
          </div></Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Input
            name='username'
            placeholder='Nombre de Usuario'
            value={this.state.username}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.usernameError}
          </div></Col></FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.genError}
          </div></Col>
          </FormGroup>

          <Button type='submit'>Registrarme</Button>
    </form>  
    </Form>
    </Container>
    );
  }
}
export default FormularioSign;
