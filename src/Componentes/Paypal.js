import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
class Paypal extends React.Component {
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
      window.location.href = "/perfil";
    };
    const style = {
      size: "medium",
      color: "blue"
    };
    return (
      <PaypalExpressBtn
        client={client}
        currency={"USD"}
        total={this.props.costo}
        onSuccess={onSuccess}
        style={style}
      />
    );
  }
}

export default Paypal;
