import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// class component
class Header extends React.Component {
  render() {
    if (localStorage.getItem("rol") == null) {
      return (
        <header>
          <h2>Bienvenido al Mejor sitio de peliculas</h2>
          <div className='row'>
            <nav className='navbar navbar-defalt'>
              <li>
                <a>
                  <img src={logo} alt='logo' />
                </a>
              </li>
              <li>
                <a>
                  <Link to='/'>Home</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to='/about'>About</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to='/contact'>Contact</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to='/planes'>Planes</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to='/Sign'>Sign Up</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to='/Login'>Login</Link>
                </a>
              </li>
            </nav>
          </div>
        </header>
      );
    }
    if (localStorage.getItem("rol") == 2) {
      return (
        <header>
          <h2>Bienvenido al Mejor sitio de peliculas</h2>
          <nav className='nav'>
            <img src={logo} alt='logo' />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/planes'>Planes</Link>
            <Link to='/perfil'>Perfil</Link>
            <Link to='/login'>Logout</Link>
          </nav>
        </header>
      );
    }
    if (localStorage.getItem("rol") == 1) {
      return (
        <header>
          <h2>Administrador Moviepass</h2>
          <nav className='nav'>
            <img src={logo} alt='logo' />
            <Link to='listarcines'>Listar Cines</Link>
            <Link to='/aggcine'>Agregar Cines</Link>
            <Link to='/contratos'>Listar Contratos</Link>
            <Link to='/regcontratos'>Agregar Contratos</Link>
            <Link to='/login'>Logout</Link>
          </nav>
        </header>
      );
    }
  }
}

export default Header;
