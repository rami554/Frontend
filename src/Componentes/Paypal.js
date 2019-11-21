import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Badge } from "react-bootstrap";
import axios from "axios";
class Paypal extends React.Component {
  state = {
    user_id: "",
    plan_id: "",
    fecha_inicio: "",
    fecha_fin: ""
  };
  setSubscription() {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    const fecha_inicio = anio + "-" + mes + "-" + dia;
    const fecha_fin = this.calculateEndDate(dia, mes, anio);
    const plan_idS = localStorage.getItem("plan_id");
    const plan_id = parseInt(plan_idS, 10);
    const user_id = this.props.userid;
    this.setState({ user_id, plan_id, fecha_inicio, fecha_fin });
    console.log(this.state);
    console.log("Guardando Suscripcion");
    axios
      .post("https://localhost:44356/api/UserSubscription", {
        user_id: this.state.user_id,
        subscription_id: this.state.plan_id,
        start_date: this.state.fecha_inicio,
        end_date: this.state.fecha_fin
      })
      .then(res => {
        console.log(res);
        window.location.href = "/suscripcion";
      })
      .catch(error => {
        console.log(error);
      });
  }
  calculateEndDate(dia, mes, anio) {
    if (mes + 1 > 12) {
      anio = anio + 1;
      mes = 1;
    } else {
      mes = mes + 1;
    }
    if (dia == 31) {
      dia = 30;
    }
    const fecha_fin = anio + "-" + mes + "-" + dia;
    return fecha_fin;
  }

  render() {
    const client = {
      sandbox:
        "AQE4UBqDiakRdl-iRzC0UkCUYlT-4rzGUAgTE5TDnIndHPxPQCu9jaXniAenxb75lT0O5x56_qtmDnSf",
      production: "-- id--"
    };
    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded! Yay!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
      this.setSubscription();
    };
    const style = {
      size: "medium",
      color: "blue"
    };
    return (
      <div>
        <h3>
          <Badge variant='info'>Pagar con PayPal</Badge>
        </h3>
        <PayPalButton
          options={{
            clientId:
              "AQE4UBqDiakRdl-iRzC0UkCUYlT-4rzGUAgTE5TDnIndHPxPQCu9jaXniAenxb75lT0O5x56_qtmDnSf"
          }}
          onSuccess={(details, data) => {
            console.log("Exitoso");
            this.setSubscription();
            //window.location.href = "/suscripcion";
          }}
          amount={this.props.costo}
          currency={"USD"}
        />
      </div>
    );
  }
}

export default Paypal;
