import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "../../components/Header";
export default class contratos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contratos: []
    };
  }

  componentDidMount() {
    this.getContratos();
  }
  getContratos() {
    axios
      .get("https://localhost:44356/api/ContractDetail")
      .then(res => {
        const contratos = JSON.parse(res.data);
        this.setState({ contratos });
        console.log(contratos);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div class='container'>
        <Header />
        <h3>CONTRATOS DE LOS CINES</h3>
        <hr />

        <table class='table table-bordered order-table '>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Culminacion</th>
              <th>Estado del contrato</th>
              <th>Dias Restantes</th>
            </tr>
          </thead>
          <tbody id='bodytable'>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
  renderList() {
    return this.state.contratos.map(data => {
      return (
        <tr>
          <td>{data.cinema_name}</td>
          <td>{data.start_date}</td>
          <td>{data.end_date}</td>
          <td>{data.estado}</td>
          <td>{data.time_difference}</td>
        </tr>
      );
    });
  }
}

if (document.getElementById("contratos")) {
  ReactDOM.render(<contratos />, document.getElementById("contratos"));
}
