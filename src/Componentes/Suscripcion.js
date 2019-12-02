import React, { Component } from "react";
import Paypal from "./Paypal";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";
import Datos_Suscription from "./Datos_Suscription";
import Header from "../components/Header"

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
    costosus: "",
    userid: "",
    pagado: true,
    pago: "",
    isPayed: true
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
  getFecha(userid) {
    console.log(userid);
    axios
      .get(`https://localhost:44356/api/LastDate/${userid}`)
      .then(res => {
        const data = JSON.parse(res.data);
        console.log("Repuesta de la ultima fecha");
        console.log(data.end_date);
        const ultimo_pago = data.end_date.substring(0, 10);
        const fecha = ultimo_pago.split("-");
        const dia = fecha[2];
        const mes = fecha[1];
        const año = fecha[0];
        const pago = dia + "/" + mes + "/" + año;
        this.setState({ pago });
        this.isPayed(dia, mes, año);
      })
      .catch(error => {
        const pagado = false;
        this.setState({ pagado });
        console.log(pagado);
      });
  }
  isPayed(dia, mes, año) {
    const expira = new Date(año, mes - 1, dia);
    const hoy = new Date();
    const pagado = true;
    console.log(expira);
    console.log(hoy);
    if (expira < hoy) {
      pagado = false;
    }
    this.setState({ pagado });
  }
  getUsuario() {
    const data = JSON.parse(localStorage.getItem("data"));
    const usuario = data[0];
    const ci = usuario.document;
    const nombre = usuario.first_name;
    const apellido = usuario.last_name;
    const email = usuario.email;
    const telefono = usuario.phone_number;
    const userid = usuario.user_id;
    this.setState({ ci, nombre, apellido, email, telefono, userid });
    this.getFecha(userid);
  }
  cambio() {
    const costos = this.state.costo / 6.96;
    var costosus = costos.toFixed(2);
    this.setState({ costosus });
    console.log(costosus);
  }
  render() {
    if (this.state.pagado) {
      return (
        <div>
          <Header />
          <h3>
            <Badge variant='info'>
              Aún estas tienes este plan activo, tu ultimo pago fue el{" "}
              {this.state.pago}
            </Badge>
          </h3>
          <Datos_Suscription state={this.state} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Datos_Suscription state={this.state} />
          <Paypal costo={this.state.costosus} userid={this.state.userid} />
        </div>
      );
    }
  }
}

export default Suscripcion;
