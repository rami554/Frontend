import React, { Component } from "react";
import Paypal from "./Paypal";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";
class Suscripcion extends React.Component {
  state = {
    id_plan: "",
    nombre_plan: "",
    costo: "",
    detalles: "",
    duracion: "",
    ci: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    costosus: ""
  };

  componentDidMount() {
    this.getPlan();
    this.getUsuario();
  }
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
  getUsuario() {
    const data = JSON.parse(localStorage.getItem("data"));
    const usuario = data[0];
    const ci = usuario.document;
    const nombre = usuario.first_name;
    const apellido = usuario.last_name;
    const email = usuario.email;
    const telefono = usuario.phone_number;
    this.setState({ ci, nombre, apellido, email, telefono });
  }
  cambio() {
    const costos = this.state.costo / 6.96;
    var costosus = costos.toFixed(2);
    this.setState({ costosus });
    console.log(costosus);
  }
  render() {
    return (
      <div>
        <h3>
          <Badge variant='success'>Datos del Usuario</Badge>
        </h3>
        <Table responsive striped bordered hover size='dark' striped='true'>
          <tbody>
            <tr>
              <th>NOMBRE: </th>
              <th>
                {this.state.nombre} {this.state.apellido}{" "}
              </th>
            </tr>
            <tr>
              <th>NUMERO DE DOCUMENTO: </th>
              <th>{this.state.ci}</th>
            </tr>
            <tr>
              <th>CORREO : </th>
              <th>{this.state.email}</th>
            </tr>
            <tr>
              <th>TELEFONO: </th>
              <th>{this.state.telefono}</th>
            </tr>
          </tbody>
        </Table>
        <h3>
          <Badge variant='danger'>Datos del Plan</Badge>
        </h3>
        <Table responsive striped bordered hover size='dark' striped='true'>
          <tbody>
            <tr>
              <th>NOMBRE DEL PLAN: </th>
              <th>{this.state.nombre_plan}</th>
            </tr>
            <tr>
              <th>COSTO: </th>
              <th>{this.state.costo} Bs.</th>
            </tr>
            <tr>
              <th>DURACION : </th>
              <th>{this.state.duracion} mes(es)</th>
            </tr>
            <tr>
              <th>DETALLES: </th>
              <th>{this.state.detalles}</th>
            </tr>
          </tbody>
        </Table>
        <h3>
          <Badge variant='info'>Pagar con PayPal</Badge>
        </h3>
        <Paypal costo={this.state.costosus} />
      </div>
    );
  }
}

export default Suscripcion;
