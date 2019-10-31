import React, { Component } from "react";
import { Table, Badge } from "react-bootstrap";
class Datos_Suscription extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <Badge variant='success'>Datos del Usuario</Badge>
        </h3>
        <Table responsive striped bordered hover size='dark' striped='true'>
          <tbody>
            <tr>
              <th>NOMBRE: </th>
              <th>
                {this.props.state.nombre} {this.props.state.apellido}{" "}
              </th>
            </tr>
            <tr>
              <th>NUMERO DE DOCUMENTO: </th>
              <th>{this.props.state.ci}</th>
            </tr>
            <tr>
              <th>CORREO : </th>
              <th>{this.props.state.email}</th>
            </tr>
            <tr>
              <th>TELEFONO: </th>
              <th>{this.props.state.telefono}</th>
            </tr>
          </tbody>
        </Table>
        <h3>
          <Badge variant='danger'>Datos del Plan</Badge>
        </h3>
        <Table responsive striped bordered hover size='dark' striped='true'>
          <tbody>
            <tr>
              <th>NOMBRE DEL PLAN: </th>
              <th>{this.props.state.nombre_plan}</th>
            </tr>
            <tr>
              <th>COSTO: </th>
              <th>{this.props.state.costo} Bs.</th>
            </tr>
            <tr>
              <th>DURACION : </th>
              <th>{this.props.state.duracion} mes(es)</th>
            </tr>
            <tr>
              <th>DETALLES: </th>
              <th>{this.props.state.detalles}</th>
            </tr>
          </tbody>
        </Table>{" "}
      </div>
    );
  }
}

export default Datos_Suscription;
