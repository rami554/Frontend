import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  ButtonToolbar,
  Badge,
  Alert,
  Col,
  ListGroup,
  Form
} from "react-bootstrap";

const initialState = {
  contraseña: "",
  verif: "",
  verifError: "",
  contraseñaError: "",
  genError: ""
};

class NuevaContraseña extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validar() {
    let verifError = "";
    let contraseñaError = "";
    let genError = "";
    if (!this.state.contraseña) {
      contraseñaError = "Este campo no puede estar vacío";
    }
    if (!this.state.verif) {
      verifError = "Este campo no puede estar vacio";
    }
    if (this.state.contraseña != this.state.verif) {
      genError = "Las contraseñas deben coincidir";
    }
    if (contraseñaError || verifError || genError) {
      this.setState({ contraseñaError, verifError, genError });
      return false;
    }
    return true;
  }
  submitHandler = e => {
    e.preventDefault();
    let isValid = this.validar();
    if (isValid) {
      localStorage.setItem("datosRecuperacion", JSON.stringify(this.state));
      this.cambiarPass();
      console.log(this.state);
    }
  };
  cambiarPass() {
    const id = localStorage.getItem("idCambiar");
    axios
      .put(`https://localhost:44356/api/User/${id}`, {
        password: this.state.contraseña
      })
      .then(res => {
        localStorage.setItem("np", true);
        this.props.history.push("/login");
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ListGroup variant='flush'>
          <ListGroup.Item variant='primary'>
            Recuperar contraseña
          </ListGroup.Item>
          <br></br>
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId='contraseña'>
              <Form.Label>Nueva Contraseña</Form.Label>
              <Form.Control
                name='contraseña'
                type='password'
                placeholder=''
                value={this.state.ci}
                onChange={e => this.change(e)}
              />
            </Form.Group>
            <Form.Group controlId='verif'>
              <Form.Label>Verificar Contraseña</Form.Label>
              <Form.Control
                name='verif'
                type='password'
                placeholder=''
                value={this.state.telefono}
                onChange={e => this.change(e)}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </ListGroup>
      </div>
    );
  }
}
export default NuevaContraseña;
