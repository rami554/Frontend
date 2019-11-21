import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
class prueba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const client = {
      sandbox:
        "AQE4UBqDiakRdl-iRzC0UkCUYlT-4rzGUAgTE5TDnIndHPxPQCu9jaXniAenxb75lT0O5x56_qtmDnSf"
    };

    return (
      <PayPalButton
        options={{
          clientId:
            "AQE4UBqDiakRdl-iRzC0UkCUYlT-4rzGUAgTE5TDnIndHPxPQCu9jaXniAenxb75lT0O5x56_qtmDnSf"
        }}
        onSuccess={(details, data) => {
          console.log("Exitoso");
        }}
        amount={1.0}
        currency={"USD"}
      />
    );
  }
}

export default prueba;
