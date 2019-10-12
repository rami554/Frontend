import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// class component
class Header extends React.Component {
  render(){
    if (localStorage.getItem("rol") == null) {
      return (
        <header>
          <h2>Bienvenido al Mejor sitio de peliculas</h2>
          <nav className='nav'>
            <img src={logo} alt='logo' />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/planes'>Planes</Link>
            <Link to='/Sign'>Sign Up</Link>
            <Link to='/Login'>Login</Link>
          </nav>
        </header>
      );
    } else {
       return (
        <header>
          <h2>Bienvenido al Mejor sitio de peliculas</h2>
          <nav className='nav'>
            <img src={logo} alt='logo' />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/planes'>Planes</Link>
            <Link to='/Sign'>Sign Up</Link>
            <Link to='/login'>Logout</Link>
          </nav>
        </header>
      );
    }
  }
}

export default Header;
