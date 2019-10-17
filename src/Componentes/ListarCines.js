import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  ButtonToolbar,
  Badge,
  Alert,
  Col,
  ListGroup
} from "react-bootstrap";
class ListarCines extends Component {
  state = {
    cines: []
  };
  componentDidMount() {
    this.getCines();
  }
  getCines() {
    axios
      .get("https://localhost:44356/api/Cinema")
      .then(res => {
        const cines = JSON.parse(res.data);
        this.setState({ cines });
        console.log(cines);
      })
      .catch(error => {
        console.log(error);
      });
  }
  editar(cine) {
    localStorage.setItem("selectedCinema", JSON.stringify(cine));
    this.props.history.push("/editCine");
  }
  render() {
    return (
      <div>
        <Container>
          <ListGroup variant='flush'>
            <ListGroup.Item variant='primary'>Datos del cine</ListGroup.Item>{" "}
            <Row>
              <Col>
                <ListGroup.Item variant='info'>Nombre</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item variant='info'>Direccion</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item variant='info'>Teléfono</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item variant='info'>E-Mail</ListGroup.Item>
              </Col>
              <Col></Col>
            </Row>
            {this.state.cines.map(cine => (
              <Row>
                <Col>
                  <ListGroup.Item>{cine.name}</ListGroup.Item>
                </Col>
                <Col>
                  <ListGroup.Item>{cine.address}</ListGroup.Item>
                </Col>
                <Col>
                  <ListGroup.Item>{cine.phone}</ListGroup.Item>
                </Col>
                <Col>
                  <ListGroup.Item>{cine.email}</ListGroup.Item>
                </Col>
                <Col>
                  <ButtonToolbar>
                    <Button
                      variant='warning'
                      onClick={() => {
                        this.editar(cine);
                      }}
                    >
                      Editar Cine
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}
export default ListarCines;
