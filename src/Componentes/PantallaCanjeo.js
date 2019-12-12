import React from "react";
import axios from "axios";
import {
  Media,
  Container,
  Row,
  Badge,
  Card,
  Nav,
  Alert,
  Table,
  Button,
  Col
} from "react-bootstrap";
import Qr from "../pages/QR/Qr";
class PantallaCanjeo extends React.Component {
  state = {
    pelicula: [],
    AvailableCinemas: [],
    data: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const isCanjeo = localStorage.getItem("isCanjeo");
    const idPelicula = localStorage.getItem("idPelicula2");
    this.getPelicula(idPelicula);
  }
  getPelicula(id) {
    axios
      .get(`https://localhost:44356/api/Movie/${id}`)
      .then(res => {
        const pelicula = res.data;
        this.setState({ pelicula });
        console.log(this.state);
        const AvailableCinemas = pelicula.AvailableCinemas;
        this.setState({ AvailableCinemas });
        console.log(this.state.AvailableCinemas);
        const data = JSON.parse(localStorage.getItem("datosCanjeo"));
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  redirect() {
    window.location.href = "/";
  }
  render() {
    const isCanjeo = localStorage.getItem("isCanjeo");
    if (isCanjeo) {
      return (
        <div>
          <Container>
            <Row>
              <Media>
                <img
                  width={300}
                  height={450}
                  className='mr-3'
                  src={this.state.pelicula.img}
                  alt='poster'
                />
                <Media.Body>
                  <Card border='info' style={{ width: "35rem" }}>
                    <Card.Header>
                      {" "}
                      <h2>
                        <Badge variant='info' align='center'>
                          {this.state.pelicula.name}
                        </Badge>
                      </h2>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <h3>
                          <Badge variant='info' align='center'>
                            Sinopsis
                          </Badge>
                        </h3>
                      </Card.Text>
                      <Card.Text>
                        <p style={{ border: "black" }}>
                          {this.state.pelicula.sinopsis}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <h4></h4>
                </Media.Body>
              </Media>
            </Row>
          </Container>
          <Container>
            <br></br>
            <Row>
              <Col></Col>

              <Col>
                <Card>
                  <Table>
                    <tr>
                      <td>
                        <h4>Usuario</h4>
                      </td>{" "}
                      <td>{this.state.data.nombre}</td>{" "}
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <h4>Cine</h4>
                      </td>{" "}
                      <td>{this.state.data.cine}</td>{" "}
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <h4>Horario</h4>
                      </td>
                      <td>{this.state.data.hora}</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <h4>Sala</h4>
                      </td>
                      <td>{this.state.data.sala}</td>
                    </tr>
                  </Table>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header>
                    <h3> Este QR es tu entrada!</h3>
                  </Card.Header>
                  <Card.Text>
                    <Qr></Qr>
                  </Card.Text>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return <div>{this.redirect()}</div>;
    }
  }
}

export default PantallaCanjeo;
