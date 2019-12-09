import React from "react";
import QRCode from "qrcode.react";
import { Button } from "react-bootstrap";

export default class Qr extends React.Component {
  render() {
    const donwloadqr=() =>{
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
    };
    return (
      <div>
        <QRCode id="moviepass" value="hay caramba"></QRCode><br />
        <Button onClick={donwloadqr}> Download QR </Button></div>
    );
  }
}
