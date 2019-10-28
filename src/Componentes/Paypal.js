import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
class Paypal extends Component {
  render() {
    const client = {
      sandbox:
        "AQE4UBqDiakRdl-iRzC0UkCUYlT-4rzGUAgTE5TDnIndHPxPQCu9jaXniAenxb75lT0O5x56_qtmDnSf",
      production: "-- id--"
    };

    return <PaypalExpressBtn client={client} currency={"USD"} total={25.0} />;
  }
}

export default Paypal;
