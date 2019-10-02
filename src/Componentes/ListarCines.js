import React, { Component } from "react";
import axios from "axios";

class ListarCines extends Component {
  getCines = e => {
    e.preventDefault();
    axios
      .get("https://localhost:44356/api/Cinema")
      .then(res => localStorage.setItem("listaCines", res.data))
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.getCines}>Obtener Listado de cines</button>
      </div>
    );
  }
}
export default ListarCines;
