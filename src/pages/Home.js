import React from "react";
import cine1 from "./cine1.jpg"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Informacion de Cines</h1>
        <img src={cine1} alt="cine1" />
      </div>
    );
  }
}

export default Home;
