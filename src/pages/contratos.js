import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class contratos extends Component {
    render() {
        return (
          <div class="container">
          
            <h3>CONTRATOS DE LOS CINES</h3>
            <hr/>

            <table class="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>name</th>
                  <th>Direccion</th>
                  <th>telefono</th>
                  <th>Detalle</th>
                  <th>fecha</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                  <tr>
                    <td>name</td>
                    <td>Direccion</td>
                    <td>telefono</td>
                    <td>Detalle</td>
                    <td>fecha</td>
                  </tr>
              </tbody>
            </table>

          </div>
        );
    }
}

if (document.getElementById('contratos')) {
    ReactDOM.render(<contratos />, document.getElementById('contratos'));
}