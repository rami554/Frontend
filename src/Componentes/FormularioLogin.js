import React from "react";
import axios from "axios";
class FormularioLogin extends React.Component {
  state = {
    username: "",
    password: "",
    rol: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getdata() {
    const datos = JSON.parse(localStorage.getItem("data"));
    localStorage.setItem("rol", datos[0].rol_id);
    const rols = datos[0].rol_id;
    console.log(rols);
  }
  submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://localhost:44356/api/myLogin", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => localStorage.setItem("data", res.data))
      .then(this.getdata)
      .then(() => {
        if (localStorage.getItem("rol") == "2") {
          this.props.history.push("/");
        }
        if (localStorage.getItem("rol") == "1") {
          this.props.history.push("/admin");
        }
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state);
  };
  loginHandler() {}
  render() {
    if (localStorage.getItem("rol") == null) {
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
    } else {
      return <div>{(localStorage.clear(), this.props.history.push("/"))}</div>;
    }
  }
}
export default FormularioLogin;
