import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//import Header from "./components/Header";
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
import incontratos from "./pages/incontratos";
import ListarCines from "./Componentes/ListarCines";
import EditarCine from "./Componentes/EditarCine";
import AgregarCine from "./Componentes/AgregarCine";
import RecuperarContrasena from "./Componentes/RecuperarContrasena";
import NuevaContraseña from "./Componentes/NuevaContraseña";
import Pruebpp from "./Componentes/Paypal";
import Paypal from "./Componentes/Paypal";
import Suscripcion from "./Componentes/Suscripcion";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main style={{ marginTop: "80px" }}>
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
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
