import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import style from "../style/menu.css"
import 'bootstrap/dist/css/bootstrap.min.css'
// className component
class Header extends React.Component {
  render() {
    if (localStorage.getItem("rol") == null) {
      return (
          <header className="toolbar">
            <nav className="toolbar__navigation">
              <div className="toolbar__logo">
                <img src={Logo} alt=""/>
                <a href="#">MoviePass</a>
              </div>
              <div className="spacer"></div>
              <div className="toolbar__navigation-items">
                <ul>
                  <li><Link to='/'>Inicio</Link></li>
                  <li><Link to='/about'>Sobre Nosotros</Link></li>
                  <li><Link to='/planes'>Planes</Link></li>
                  <li><Link to='/Login'>Login</Link></li>
                </ul>
              </div>
            </nav>
            <nav className="toolbar__compliment">
              <Link to='/Sign'>
                  <span>Sign Up</span>
              </Link>
            </nav>
          </header>
    );
    }
    if (localStorage.getItem("rol") == 2) {
      return (
          <header className="toolbar">
            <nav className="toolbar__navigation">
              <div className="toolbar__logo">
                <img src={Logo} alt=""/>
                <a href="#">MoviePass</a>
              </div>
              <div className="spacer"></div>
              <div className="toolbar__navigation-items">
                <ul>
                  <li><Link to='/'>Inicio</Link></li>
                  <li><Link to='/about'>Sobre Nosotros</Link></li>
                  <li><Link to='/planes'>Planes</Link></li>
                  <li><Link to='/perfil'>Perfil</Link></li>
                  <li><Link to='/login'>Logout</Link></li>
                </ul>
              </div>
            </nav>
          </header>
      );
    }
    if (localStorage.getItem("rol") == 1) {
      return (
        <header>
          <h2>Administrador Moviepass</h2>
          <nav className='nav'>
            <img src={Logo} alt='logo' />
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
