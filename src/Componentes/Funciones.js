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
  Button
} from "react-bootstrap";

class Funciones extends React.Component {
  state = {
    funciones: [],
    idPelicula: ""
  };
  componentDidMount() {
    const idPelicula = localStorage.getItem("idPelicula");
    console.log(idPelicula);
    if (idPelicula) {
      this.getScreenings(idPelicula);
    }
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
  render() {
    return (
      <div>
        {" "}
        <Card border='info' style={{ width: "55rem" }}>
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
              <Table>
                <tr>
                  <td> Nro de Sala</td>
                  <td> Horario</td>
                  <td> Conseguir tickets</td>
                </tr>
                {this.state.funciones.map(funcion => (
                  <tr>
                    <td> {funcion.auditorium_id}</td>
                    <td> {funcion.time}</td>
                    <td>
                      <Button variant='success'>Canjear</Button>{" "}
                    </td>
                  </tr>
                ))}
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Funciones;
