import React from "react";
import axios from "axios";
class FormularioSignPeople extends React.Component {
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
        <form onSubmit={this.submitHandler}>
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
          <button type='submit'>Registrar datos de cuenta</button>
        </form>
      </div>
    );
  }
}
export default FormularioSignPeople;
