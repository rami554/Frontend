import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "../components/login.css";

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
          <title>Iniciar Sesion</title>
          <Header />
          <Container className='login'>
            <h3 name='initSesion'>INICIAR SESION</h3>
            <form onSubmit={this.submitHandler}>
              <Form className='form'>
                <Col>
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input
                      class='form-control'
                      type='text'
                      name='username'
                      placeholder='Nombre de Usuario'
                      value={this.state.username}
                      onChange={e => this.change(e)}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.usernameError}
                    </div>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      class='form-control'
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={e => this.change(e)}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.passwordError}
                    </div>
                  </FormGroup>
                </Col>
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.genError}
                </div>
                <Link to='/recpass' class='form-input'>
                  Olvidaste tu contraseña?
                </Link>
                <br></br>
                <Button type='submit' class='btn btn-primary'>
                  Iniciar Sesión
                </Button>
                <ToastContainer />
              </Form>
            </form>
          </Container>
        </div>
      );
    } else {
      return <div>{(this.props.history.push("/"), localStorage.clear())}</div>;
    }
  }
}
export default FormularioLogin;
