import React from "react";
import Cards from "../components/Cards/Cards"
import Header from "../components/Header";

class Planes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Nuestros Planes</h1>
        <Cards />
      </div>
    );
  }
}

export default Planes;