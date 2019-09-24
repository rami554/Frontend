import React from "react";

class Sign_Login extends React.Component {
  render() {
    return (
      <div>
        MOVIE PASS
        <br></br>
        <br></br>
        <button onClick={this.routeChange} id='Login'>
          Iniciar sesion
        </button>
        <br></br>
        <br></br>
        <button id='Sign'>Registrarse</button>
      </div>
    );
  }
}
export default Sign_Login;
