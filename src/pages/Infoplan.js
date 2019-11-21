import React, { Component } from "react";
import { Table, Badge, Container } from "react-bootstrap";
import {Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class infoplan extends React.Component {
  render() {
    return (
      <div>
        <h3>Datos del Plan
        </h3>
          <Container>
            <FormGroup row>
              <Label>NOMBRE DEL PLAN: </Label>
              <Col>
              <th>{this.props.state.nombre_plan}</th></Col>
            </FormGroup>
            <FormGroup row>
              <Label>COSTO: </Label>
              <Col><th>{this.props.state.costo} Bs.</th></Col>
              </FormGroup>
            <FormGroup row>
              <Label>DURACION : </Label>
              <Col><th>{this.props.state.duracion} mes(es)</th></Col>
              </FormGroup>
            <FormGroup row>
              <Label>DETALLES: </Label>
              <Col><th>{this.props.state.detalles}</th></Col>
              </FormGroup>
          </Container>
      </div>
    );
  }
}

export default infoplan;
