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
import { Input } from "reactstrap";
class Funciones extends React.Component {
  state = {
    funciones: [],
    idPelicula: "",
    AvailableCinemas: [],
    cines: "Multicine"
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.cines);
  };
  componentDidMount() {
    const idPelicula = localStorage.getItem("idPelicula");
    console.log(idPelicula);
    if (idPelicula) {
      this.getScreenings(idPelicula);
      this.getPelicula(idPelicula);
    }
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
        const cines = AvailableCinemas.disponible[0];
        this.setState({ cines });
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
  Canjear(hora, sala, cine, idScreening) {
    const info = JSON.parse(localStorage.getItem("data"));
    const nombre = info[0].first_name;
    const apellido = info[0].last_name;
    const nombreCompleto = nombre + " " + apellido;
    const data = {
      hora: hora,
      sala: sala,
      cine: cine,
      nombre: nombreCompleto,
      idScreening: idScreening
    };
    localStorage.setItem("datosCanjeo", JSON.stringify(data));
    localStorage.setItem("isCanjeo", true);
    window.location.href = "/canjeo";
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

                  <td> Escoger cine </td>
                  <td> Conseguir tickets</td>
                </tr>
                {this.state.funciones.map(funcion => (
                  <tr>
                    <td> {funcion.auditorium_id}</td>
                    <td> {funcion.time}</td>
                    <td>
                      <Input
                        type='select'
                        name='cines'
                        value={this.state.cines}
                        onChange={e => this.change(e)}
                      >
                        {this.state.AvailableCinemas.map(disponible => (
                          <option value={disponible}>{disponible}</option>
                        ))}
                      </Input>
                    </td>
                    <td>
                      <Button
                        variant='success'
                        onClick={() =>
                          this.Canjear(
                            funcion.time,
                            funcion.auditorium_id,
                            this.state.cines,
                            funcion.screening_id
                          )
                        }
                      >
                        Canjear
                      </Button>{" "}
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
