import React from "react";
import { Media, Container, Row, Badge, Card, Nav } from "react-bootstrap";
import axios from "axios";

class Peliculas extends React.Component {
  state = {
    pelicula: [],
    AvailableCinemas: []
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
  componentDidMount() {
    const idPelicula = localStorage.getItem("idPelicula");
    if (idPelicula) {
      this.getPelicula(idPelicula);
      localStorage.removeItem("idPelicula");
    } else {
      window.location.href = "/";
    }
  }
  render() {
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
                <h4></h4>

                <h5>
                  {" "}
                  <Badge variant='info' align='center'>
                    Cines Disponibles
                  </Badge>
                  <Nav>
                    {this.state.AvailableCinemas.map(disponible => (
                      <Nav.Item>
                        <Nav.Link disabled>{disponible}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </h5>
                <Card border='info' style={{ width: "35rem" }}>
                  <Card.Header>
                    {" "}
                    <h3>
                      <Badge variant='info' align='center'>
                        Funciones Disponibles
                      </Badge>
                    </h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p style={{ border: "black" }}>lorem ipsum</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Media.Body>
            </Media>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Peliculas;
