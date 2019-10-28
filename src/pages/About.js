import React from "react";
import img4 from "./img4.png";
class About extends React.Component {
  render() {
    return (
      <div class='justify-content-center'>
        <h1>Acerca de Nosotros</h1>
          <br/><br/>
        <img src={img4} alt="imgaen4" />
      </div>
    );
  }
}

export default About;
