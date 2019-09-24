import React from "react";
import axios from "axios";

class FormularioLogin extends React.Component {
  state = {
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
      .post("https://localhost:44356/api/Auth", this.state)
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
        INICIAR SESION
        <form onSubmit={this.submitHandler}>
          <br></br>
          <input
            type='text'
            name='username'
            placeholder='Nombre de Usuario'
            value={this.state.username}
            onChange={e => this.change(e)}
          />
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
          <button type='submit'>Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}
export default FormularioLogin;
