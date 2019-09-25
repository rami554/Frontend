import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Planes from "./pages/Planes";
import FormularioLogin from "./Componentes/FormularioLogin"
import FormularioSign from "./Componentes/FormularioSign";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div class="row justify-content-center"><Header /></div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/planes" component={Planes} />
          </Switch>
          <Switch>
            <Route path="/Sign" component={FormularioSign} />
            <Route path="/login" component={FormularioLogin} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
