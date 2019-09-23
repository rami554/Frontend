import React from "react";
import axios from "axios";
class FormularioSignPeople extends React.Component {
  state = {
    ci: "",
    nombre: "",
    apellido: "",
    genero: "",
    correo: "",
    fecha_nac: "",
    telefono: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
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

          <br></br>
          <br></br>
          <br></br>
          <button type='submit'>Registrar datos personales</button>
        </form>
      </div>
    );
  }
}
export default FormularioSignPeople;
