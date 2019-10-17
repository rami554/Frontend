import React from "react";
import AgregarCine from "./AgregarCine";
import EditarCine from "./EditarCine";
import ListarCines from "./ListarCines";
import { Container, Button, ButtonToolbar, Row } from "react-bootstrap";
class Admin extends React.Component {
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
          ADMINISTRADOR DE CINES <br></br>
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
        </div>
      );
    } else {
      return <div>{this.props.history.push("/Login")}</div>;
    }
  }
}
export default Admin;
