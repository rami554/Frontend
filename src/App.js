import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Planes from "./pages/Planes";
import FormularioLogin from "./Componentes/FormularioLogin";
import FormularioSign from "./Componentes/FormularioSign";
import Admin from "./Componentes/Admin";
import Logout from "./Componentes/Logout";
import Perfil from "./Componentes/Perfil";
import FormularioEditCuenta from "./Componentes/FormularioEditCuenta";
import contratos from "./pages/Contratos/contratos";
import incontratos from "./pages/Contratos/incontratos";
import ListarCines from "./Componentes/ListarCines";
import EditarCine from "./Componentes/EditarCine";
import AgregarCine from "./Componentes/AgregarCine";
import RecuperarContrasena from "./Componentes/RecuperarContrasena";
import NuevaContraseña from "./Componentes/NuevaContraseña";
import Pruebpp from "./Componentes/Paypal";
import Paypal from "./Componentes/Paypal";
import Suscripcion from "./Componentes/Suscripcion";
import infoSuscription from "./pages/infoSuscription";
import ListarPeliculas from "./Componentes/ListarPeliculas";
import Peliculas from "./Componentes/Peliculas";
//import prueba from "./Componentes/prueba";
import Qr from "./pages/QR/Qr";
import PantallaCanjeo from "./Componentes/PantallaCanjeo";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main style={{ marginTop: "80px" }}>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/planes' component={Planes} />
            </Switch>
            <Switch>
              <Route path='/Sign' component={FormularioSign} />
              <Route path='/login' component={FormularioLogin} />
              <Route path='/logout' component={Logout} />
              <Route path='/admin' component={Admin} />
              <Route path='/perfil' component={Perfil} />
              <Route path='/contratos' component={contratos} />
              <Route path='/editcuenta' component={FormularioEditCuenta} />
              <Route path='/listarCines' component={ListarCines} />
              <Route path='/editCine' component={EditarCine} />
              <Route path='/regcontratos' component={incontratos} />
              <Route path='/aggcine' component={AgregarCine} />
              <Route path='/recpass' component={RecuperarContrasena} />
              <Route path='/newpass' component={NuevaContraseña} />
              <Route path='/suscripcion' component={Suscripcion} />
              <Route path='/misuscripcion' component={infoSuscription} />
              <Route path='/listarpeliculas' component={ListarPeliculas} />
              <Route path='/peliculas' component={Peliculas} />
              <Route path='/qr' component={Qr} />
              <Route path='/canjeo' component={PantallaCanjeo} />
              {/*<Route path='/prueba' component={prueba} />*/}
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
