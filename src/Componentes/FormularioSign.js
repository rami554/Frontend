import React from "react";
import axios from "axios";
class FormularioSign extends React.Component {
  state = {
    ci: "",
    nombre: "",
    apellido: "",
    genero: "",
    correo: "",
    fecha_nac: "",
    telefono: ""
  };
  state2 = {
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
      .post("https://localhost:44356/api/People", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state);
    axios
      .post("https://localhost:44356/api/Users", this.state2)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state2);
  };

  render() {
    return (
      <div>
        CREA TU CUENTA
        <form onSubmit={this.submitHandler}>
          <br></br>
          <input
            name='ci'
            placeholder='C.I'
            value={this.state.ci}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            name='nombre'
            placeholder='Nombre'
            value={this.state.nombre}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            name='apellido'
            placeholder='Apellido'
            value={this.state.apellido}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <select
            name='genero'
            value={this.state.genero}
            onChange={e => this.change(e)}
          >
            <option value='Hombre'>Hombre</option>
            <option value='Mujer'>Mujer</option>
            <option value='Otro'>Otro</option>
          </select>
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
            name='fecha_nac'
            selected={this.state.startDate}
            placeholder='Fecha de nac: DD/MM/AA'
            onChange={e => this.change(e)}
          />
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
            value={this.state2.username}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state2.password}
            onChange={e => this.change(e)}
          ></input>
          <br></br>
          <br></br>
          <button type='submit'>Registrarme</button>
        </form>
      </div>
    );
  }
}
export default FormularioSign;
