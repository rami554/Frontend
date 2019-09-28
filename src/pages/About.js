import React from "react";
import img4 from "./img4.png";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Acerca de Nosotros</h1>
        <div>Somos una nueva empresa que te proporciona entradas para ver las mejores peliculas de los tiempos</div>
        <div>Te Proporcionamos diversas funciones y todo a traves de un tiquet electronico</div>
        <img src={img4} alt="imgaen4" />
      </div>
    );
  }
}

export default About;
