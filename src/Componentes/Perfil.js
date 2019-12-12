import React from "react";
import FormularioEditCuenta from "./FormularioEditCuenta";
import { Button, Container, Row, ButtonToolbar, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import ListarPeliculas from "./ListarPeliculas";

class Perfil extends React.Component {
  state = { username: "", rol: "" };
  componentWillMount() {}
  componentDidMount() {
    console.log("se ha montado");
    console.log("Se va a montar");
    if (localStorage.getItem("init")) {
      this.notify("Bienvenido");
      localStorage.removeItem("init");
    }
    if (localStorage.getItem("edited")) {
      this.notify("Datos editados correctamente");
      localStorage.removeItem("edited");
    }
    if (localStorage.getItem("isLogged")) {
      this.getData();
    } else {
      this.props.history.push("/");
    }
  }
  notify = texto => toast(texto);
  getData() {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const username = data[0].first_name;
    const rol = data[0].rol;
    console.log(username);
    this.setState({ username, rol });
  }
  logout() {
    if (!this.state.isLogged) {
      this.props.history.push("/");
    }
  }
  editPerfil() {
    this.props.history.push("/editcuenta");
  }
  inicio() {
    this.props.history.push("/");
  }
  render() {
    if (localStorage.getItem("isLogged") == "true") {
      return (
        <div>
          <Header />
          <h3>
            <Badge variant='primary'>
              {" "}
              Bienvenido de nuevo {this.state.username}!
            </Badge>
          </h3>
          <br></br>
          <div>
            <Container>
              <Row>
                <ButtonToolbar>
                  <Button variant='success'>Ir a ver planes</Button>
                </ButtonToolbar>
              </Row>
              <br></br>
              <Row>
                <ButtonToolbar>
                  <Button
                    variant='warning'
                    onClick={() => {
                      this.editPerfil();
                    }}
                  >
                    Editar mi perfil
                  </Button>
                </ButtonToolbar>
              </Row>
              <br></br>
            </Container>
            <ToastContainer />
            <ListarPeliculas></ListarPeliculas>
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
