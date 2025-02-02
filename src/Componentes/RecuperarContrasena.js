import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  ci: "",
  telefono: "",
  ciError: "",
  telefonoError: ""
};
export default class RecuperarContrasena extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  notify = () => toast("Wow so easy !");
  getId() {
    axios
      .post("https://localhost:44356/api/UserPass", {
        document: this.state.ci,
        phone_number: this.state.telefono
      })
      .then(res => {
        const data = JSON.parse(res.data);
        localStorage.setItem("idCambiar", data);
        this.props.history.push("/newpass");
      })
      .catch(error => {
        const genError = error.response.data;
        console.log(genError);
        this.setState({ genError });
      });
  }
  validar() {
    let ciError = "";
    let telefonoError = "";

    if (!this.state.ci) {
      ciError = "Este campo no puede estar vacio";
    }
    if (!this.state.telefono) {
      telefonoError = "Este campo no puede estar vacio";
    }
    if (ciError || telefonoError) {
      this.setState({ ciError, telefonoError });
      return false;
    }
    return true;
  }
  submitHandler = e => {
    e.preventDefault();
    let isValid = this.validar();
    if (isValid) {
      this.getId();
    }
    //this.props.history.push("/newpass");
  };
  render() {
    return (
      <div>
        Recuperar Contraseña
        <ListGroup variant='flush'>
          <ListGroup.Item variant='primary'>
            Recuperar contraseña
          </ListGroup.Item>
          <br></br>
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId='ci'>
              <Form.Label>Ingresa tu CI</Form.Label>
              <Form.Control
                name='ci'
                type='number'
                placeholder=''
                value={this.state.ci}
                onChange={e => this.change(e)}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.ciError}
              </div>
            </Form.Group>
            <Form.Group controlId='telefono'>
              <Form.Label>Ingresa tu telefono</Form.Label>
              <Form.Control
                name='telefono'
                type='number'
                placeholder=''
                value={this.state.telefono}
                onChange={e => this.change(e)}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.telefonoError}
              </div>
              <br></br>
              <div style={{ fontSize: 15, color: "red" }}>
                {this.state.genError}
              </div>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
            <ToastContainer />
          </Form>
        </ListGroup>
      </div>
    );
  }
}
