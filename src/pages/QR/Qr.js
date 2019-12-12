import React from "react";
import QRCode from "qrcode.react";
import { Button, Badge } from "react-bootstrap";
import axios from "axios";
export default class Qr extends React.Component {
  state = {
    respuestaError: ""
  };
  almacenarCanjeo() {
    const datos = JSON.parse(localStorage.getItem("datosCanjeo"));
    const idScreening = datos.idScreening;
    const data = JSON.parse(localStorage.getItem("data"));
    const idUser = data[0].user_id;
    var canjeoCorrecto = false;
    axios
      .post(`https://localhost:44356/api/Reservation/${idUser}`, {
        screening_id: idScreening
      })
      .then(
        res => console.log(res.data),
        localStorage.setItem("canjeadoCorrecto", true),
        localStorage.setItem("canjeado", true)
      )
      .catch(error => {
        console.log(error.response.data.Message);
        const respuestaError = error.response.data.Message;
        this.setState({ respuestaError });
        localStorage.setItem("canjeadoCorrecto", false);
        this.setState({ canjeoCorrecto });
        console.log(error);
      });
  }

  render() {
    const donwloadqr = () => {
      this.almacenarCanjeo();
      const canjeadoCorrecto = localStorage.getItem("canjeadoCorrecto");
      if (canjeadoCorrecto == true) {
        const canvas = document.getElementById("moviepass");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "moviepass.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.location.href = "/perfil";
      }
    };
    return (
      <div>
        <QRCode
          id='moviepass'
          value={localStorage.getItem("datosCanjeo")}
        ></QRCode>
        <br />
        <Button onClick={donwloadqr}> Descargar QR </Button>
        <div>
          <h4>
            <Badge variant='danger'>{this.state.respuestaError}</Badge>
          </h4>
        </div>
      </div>
    );
  }
}
