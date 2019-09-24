import React from "react";
import axios from "axios";
class FormularioSign extends React.Component {
  state = {
    correo: "",
    telefono: "",
    username: "",
    password: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        EDITAR TU CUENTA
        <form onSubmit={this.submitHandler}>
          <br></br>
          <input
            type='mail'
            name='correo'
            placeholder='Correo'
            value={this.state.correo}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='number'
            name='telefono'
            placeholder='Telefono'
            value={this.state.teléfono}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            name='username'
            placeholder='Nombre de Usuario'
            value={this.state.username}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <button type='submit'>Actualizar datos</button>
        </form>
      </div>
    );
  }
}
export default FormularioSign;
