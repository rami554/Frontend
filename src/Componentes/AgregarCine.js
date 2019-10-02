import React from "react";
import axios from "axios";

class AgregarCine extends React.Component {
  state = {
    address: "",
    email: "",
    phone: "",
    name: "",
    googlemaps: "",
    picture: "",
    website: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <p>AGREGAR CINE</p>
          <br></br>
          <input
            type='text'
            name='address'
            placeholder='Dirección'
            value={this.state.address}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='email'
            placeholder='Correo electrónico'
            value={this.state.email}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='phone'
            placeholder='Teleéfono'
            value={this.state.phone}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            value={this.state.name}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='googlemaps'
            placeholder='URL Google Maps'
            value={this.state.googlemaps}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='picture'
            placeholder='URL foto del cine'
            value={this.state.picture}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='text'
            name='website'
            placeholder='Página Web'
            value={this.state.website}
            onChange={e => this.change(e)}
          ></input>
          <button type='submit'>Agregar Cine</button>
        </form>
      </div>
    );
  }
}
export default AgregarCine;
