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
import FormularioLogin from "./component/Componente-login/FormularioLogin"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/planes" component={Planes} />
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
