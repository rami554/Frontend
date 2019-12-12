import React from "react";
import {
  Media,
  Container,
  Row,
  Badge,
  Card,
  Nav,
  Alert,
  Table,
  Button
} from "react-bootstrap";
import axios from "axios";
import Funciones from "./Funciones";

class Peliculas extends React.Component {
  state = {
    pelicula: [],
    AvailableCinemas: [],
    funciones: [],
    id: ""
  };
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
      })
      .catch(error => {
        console.log(error);
      });
  }
  getScreenings(id) {
    axios
      .get(`https://localhost:44356/api/Screening/${id}`)
      .then(res => {
        const funciones = JSON.parse(res.data);
        this.setState({ funciones });
        console.log(funciones);
      })
      .catch(error => {
        console.log(error);
      });
  }
  setStatePelicula(idPelicula) {
    this.setState({ idPelicula });
    console.log("plox");
    console.log(this.state.idPelicula);
  }
  componentDidMount() {
    const idPelicula = localStorage.getItem("idPelicula");
    if (idPelicula) {
      this.setStatePelicula(idPelicula);
      this.getPelicula(idPelicula);
      this.getScreenings(idPelicula);
      localStorage.removeItem("idPelicula");
    } else {
      window.location.href = "/";
    }
  }
  render() {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged) {
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
                  <Card>
                    <Card.Header>
                      <Badge variant='info' align='center'>
                        Cines Disponibles
                      </Badge>
                    </Card.Header>
                    <Card.Body>
                      <Nav>
                        {this.state.AvailableCinemas.map(disponible => (
                          <Nav.Item>
                            <Nav.Link disabled>{disponible}</Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Card.Body>
                  </Card>
                  <h4></h4>
                </Media.Body>
              </Media>
            </Row>

            <Row>
              <Funciones />
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Media>
                <img
                  width={400}
                  height={650}
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
                  <Card>
                    <Card.Header>
                      <Badge variant='info' align='center'>
                        Cines Disponibles
                      </Badge>
                    </Card.Header>
                    <Card.Body>
                      <Nav>
                        {this.state.AvailableCinemas.map(disponible => (
                          <Nav.Item>
                            <Nav.Link disabled>{disponible}</Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Card.Body>
                  </Card>
                  <h4></h4>
                </Media.Body>
              </Media>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Peliculas;
