import React, {Component} from 'react';
import EpicMenu from './componente-menu/EpicMenu';
import logo from './logo.png'
import ReactDOM from "react-dom";
import FormularioLogin from "./Componente-login/FormularioLogin";

class App extends Component {

  render() {
    let links = [
      {label: 'Home', link: '#home', active: true},
      {label: 'About', link: '#about'},
      {label: 'Plan', link: '#planes'},
      {label: 'Contact', link: '#contact-us'},
        {label: 'Login', link: 'FormularioLogin'}
    ];

    return (
        <div className="container long">
          <h1>Bienvenido al Portal de Cines</h1>
          <EpicMenu links={links} logo={logo}/>
        </div>
    );
  }
}

export default App;
