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
  contraseñaError: "",
  verifError: ""
};

class NuevaContraseña extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    localStorage.setItem("datosRecuperacion", JSON.stringify(this.state));
    console.log(this.state);
  };
  cambiarPass = e => {
    e.preventDefault();
    const id = localStorage.getItem("idCambiar");
    axios.put(`https://localhost:44356/api/CustomUser/${id}`, {
      password: this.state.contraseña
    });
  };

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
                type='number'
                placeholder=''
                value={this.state.ci}
                onChange={e => this.change(e)}
              />
            </Form.Group>
            <Form.Group controlId='verif'>
              <Form.Label>Verificar Contraseña</Form.Label>
              <Form.Control
                name='verif'
                type='number'
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
