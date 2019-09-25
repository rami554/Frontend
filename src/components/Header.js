import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
// class component
class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Bienvenido al Mejor sitio de peliculas</h2>
        <nav className="nav">
          <img src={logo} alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/planes">Planes</Link>
          <Link to="/Sign">Sign</Link>
          <Link to="/Login">Login</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
