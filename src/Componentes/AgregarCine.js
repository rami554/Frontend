import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  ButtonToolbar,
  Badge,
  Alert
} from "react-bootstrap";
class AgregarCine extends React.Component {
  state = {
    address: "",
    email: "",
    phone: "",
    name: "",
    googlemaps: "",
    picture: "",
    website: "",
    addressError: "",
    emailError: "",
    phoneError: "",
    nameError: "",
    googlemapsError: "",
    pictureError: "",
    websiteError: ""
  };
  esValido() {
    let addressError = "";
    let emailError = "";
    let phoneError = "";
    let nameError = "";
    let googlemapsError = "";
    let pictureError = "";
    let websiteError = "";
    if (!this.state.address) {
      addressError = "Este campo no puede estar vacio";
    }
    if (!this.state.email) {
      emailError = "Este campo no puede estar vacio";
    }
    if (!this.state.phone) {
      phoneError = "Este campo no puede estar vacio";
    }
    if (!this.state.name) {
      nameError = "Este campo no puede estar vacio";
    }
    if (!this.state.googlemaps) {
      googlemapsError = "Este campo no puede estar vacio";
    }
    if (!this.state.picture) {
      pictureError = "Este campo no puede estar vacio";
    }
    if (!this.state.website) {
      websiteError = "Este campo no puede estar vacio";
    }
    if (
      addressError ||
      emailError ||
      phoneError ||
      nameError ||
      googlemapsError ||
      pictureError ||
      websiteError
    ) {
      this.setState({
        addressError,
        emailError,
        phoneError,
        nameError,
        googlemapsError,
        pictureError,
        websiteError
      });
      return false;
    }
    return true;
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    let isValid = this.esValido();
    if (isValid) {
      axios
        .post("https://localhost:44356/api/Cinema", {
          address: this.state.address,
          email: this.state.email,
          phone: this.state.phone,
          name: this.state.name,
          googlemaps: this.state.googlemaps,
          picture: this.state.picture,
          website: this.state.website
        })
        .then(response => {
          console.log(response);
          localStorage.setItem("cuentaCreada", true);
          this.props.history.push("/admin");
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>
            <Badge variant='primary'> AGREGAR CINE</Badge>
          </h3>
          <h5>
            <Badge variant='primary'>Nombre</Badge>
          </h5>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            value={this.state.name}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
          <h5>
            <Badge variant='primary'>Direccion</Badge>
          </h5>
          <input
            type='text'
            name='address'
            placeholder='Dirección'
            value={this.state.address}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.addressError}
          </div>
          <h5>
            <Badge variant='primary'>Correo Electronico</Badge>
          </h5>
          <input
            type='text'
            name='email'
            placeholder='Correo electrónico'
            value={this.state.email}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
          <h5>
            <Badge variant='primary'>Teléfono</Badge>
          </h5>
          <input
            type='number'
            name='phone'
            placeholder='Teléfono'
            value={this.state.phone}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneError}
          </div>
          <h5>
            <Badge variant='primary'>Google Maps</Badge>
          </h5>
          <input
            type='text'
            name='googlemaps'
            placeholder='URL Google Maps'
            value={this.state.googlemaps}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.googlemapsError}
          </div>
          <h5>
            <Badge variant='primary'>URL de imagen</Badge>
          </h5>
          <input
            type='text'
            name='picture'
            placeholder='URL foto del cine'
            value={this.state.picture}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.pictureError}
          </div>
          <h5>
            <Badge variant='primary'>WebSite</Badge>
          </h5>
          <input
            type='text'
            name='website'
            placeholder='Página Web'
            value={this.state.website}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.websiteError}
          </div>
          <br></br>
          <Button type='submit'>Agregar Cine</Button>
        </form>
      </div>
    );
  }
}
export default AgregarCine;
