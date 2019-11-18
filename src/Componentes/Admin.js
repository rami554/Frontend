import React from "react";
import AgregarCine from "./AgregarCine";
import EditarCine from "./EditarCine";
import ListarCines from "./ListarCines";
import { Container, Button, ButtonToolbar, Row, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

class Admin extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("cuentaCreada")) {
      this.notify("Cine agregado Exitosamente!");
      localStorage.removeItem("cuentaCreada");
    }
  }
  notify = texto => toast(texto);
  ListarCines() {
    this.props.history.push("/listarCines");
  }
  agregarCine() {
    this.props.history.push("/aggcine");
  }
  listarContratos() {
    this.props.history.push("/contratos");
  }
  render() {
    if (localStorage.getItem("rol") == "1") {
      return (
        <div>
          <Header />
          <h3>
            <Badge variant='primary'> PERFIL DE ADMINISTRADOR</Badge>
          </h3>
          <Container>
            <Row>
              <ButtonToolbar>
                <Button
                  variant='success'
                  onClick={() => {
                    this.ListarCines();
                  }}
                >
                  Listar cines registrados
                </Button>
              </ButtonToolbar>
            </Row>
            <br></br>
            <Row>
              <ButtonToolbar>
                <Button
                  variant='warning'
                  onClick={() => {
                    this.agregarCine();
                  }}
                >
                  Agregar Cine
                </Button>
              </ButtonToolbar>
            </Row>
            <br></br>
            <Row>
              <ButtonToolbar>
                <Button
                  variant='info'
                  onClick={() => {
                    this.listarContratos();
                  }}
                >
                  Ver estado de contratos
                </Button>
              </ButtonToolbar>
            </Row>
          </Container>
          <ToastContainer />
        </div>
      );
    } else {
      return <div>{this.props.history.push("/Login")}</div>;
    }
  }
}
export default Admin;
