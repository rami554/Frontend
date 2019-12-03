import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  Image,
  Container,
  Col,
  Row,
  Card,
  Button,
  Badge
} from "react-bootstrap";

class ListarPeliculas extends React.Component {
  state = {
    peliculas: []
  };
  componentDidMount() {
    axios
      .get("https://localhost:44356/api/Movie")
      .then(res => {
        const peliculas = res.data;
        this.setState({ peliculas });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  imageClick = id => {
    console.log(id);
    localStorage.setItem("idPelicula", id);
    window.location.href = "/peliculas";
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col colspan='2'>
              <h2>
                {" "}
                <Badge variant='info' align='center'>
                  Nuestra Cartelera
                </Badge>
              </h2>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            {this.state.peliculas.map(pelicula => (
              <Col xs={2} md={3}>
                <Card
                  border='info'
                  style={{ width: "16rem", height: "43rem", margin: "10px" }}
                >
                  <Card.Img
                    onClick={() => this.imageClick(pelicula.movies_id)}
                    variant='top'
                    src={pelicula.img}
                    width='60'
                    height='350'
                  />
                  <Card.Body>
                    <Card.Title className='text-center p-3'>
                      {pelicula.name}
                    </Card.Title>
                    <Card.Text>{pelicula.sinopsis.substr(0, 100)}...</Card.Text>
                  </Card.Body>
                  <Button
                    variant='info'
                    onClick={() => this.imageClick(pelicula.movies_id)}
                  >
                    Ver Mas
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListarPeliculas;
