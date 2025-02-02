import React from "react";
import { Button, Container, Row, ButtonToolbar, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import {Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

import Infoplan from "./Infoplan";

class Suscription extends React.Component {
  state = { username: "", rol: "",id_plan: "",
  nombre_plan: "",
  costo: "",
  detalles: "",
  duracion: ""};
  componentDidMount() {
    this.getPlan();
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
  
  inicio() {
    this.props.history.push("/");
  }

//Llamando los datos de planes y esstado de suscriptores
getPlan() {
  const id = localStorage.getItem("plan_id");
  axios
    .get(`https://localhost:44356/api/Subscription/${id}`)
    .then(res => {
      const planes = JSON.parse(res.data);
      const id_plan = planes[0].subscription_id;
      const nombre_plan = planes[0].name;
      const costo = planes[0].cost;
      const detalles = planes[0].details;
      const duracion = planes[0].duration_months;
      this.setState({ id_plan, nombre_plan, costo, detalles, duracion });
      console.log(this.state);
      this.cambio();
    })
    .catch(error => {
      console.log(error);
    });
}

  render() {
    if (localStorage.getItem("isLogged") == "true") {
      return (
        <div>
          <Header />
          <h3>
             Suscripcion de:  {this.state.username}
          </h3>
          <br></br>
          <div>
            <Container>
            <Infoplan state={this.state} />
            <FormGroup row><Col><Button>
                    Cambiar de Plan
                  </Button></Col>
                  <Col><Button >
                    Congelar Plan
                  </Button></Col>
                  <Col><Button >
                    Cancelar Plan
                  </Button></Col>
              </FormGroup>
            </Container>
            <ToastContainer />
          </div>
          <h4>Historial de Pago</h4>
          <table class="table table-bordered order-table ">
            
              <thead>
                <tr>
                  <th>Nombre del Plan</th>
                  <th>Fecha de Pago</th>
                  <th>Fecha de Culminacion</th>
                  <th>Costo</th>
                </tr>
              </thead>
            </table>
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

export default Suscription;