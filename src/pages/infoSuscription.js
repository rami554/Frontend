import React from "react";
import { Button, Container, Row, ButtonToolbar, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import {Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import swal from "sweetalert";

import Infoplan from "./Infoplan";

class Suscription extends React.Component {
  state = {username: "", rol: "",id_plan: "",
  nombre_plan: "",
  costo: "",
  detalles: "",
  duracion: "",userid:""};
  componentDidMount() {
    this.getData();
  }
  getData() {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const userid =data[0].user_id;
    const username = data[0].first_name;
    const rol = data[0].rol;
    console.log(username);
    this.setState({ username, rol});
    this.getPagos(userid);
  }
  logout() {
    if (!this.state.isLogged) {
      this.props.history.push("/");
    }
  }

//Llamando los datos de planes y esstado de suscriptores
getPlan(id) {
  //console.log(id);
  //const id = localStorage.getItem("plan_id");
  axios
    .get(`https://localhost:44356/api/Subscription/${id}`)
    .then(res => {
      const planes = JSON.parse(res.data);
      const nombre_plan = planes[0].name;
      const costo = planes[0].cost;
      const detalles = planes[0].details;
      const duracion = planes[0].duration_months;
      this.setState({nombre_plan, costo, detalles, duracion });
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    });
}
//Listar Historial de Pagos
constructor(props) {
  super(props);
  this.state = {
    gethistory: []
  };
}
getPagos(userid) {
  //const userid = localStorage.getItem("user_id")
  //console.log(userid);
  axios
    .get(`https://localhost:44356/api/GetHistory/${userid}`)
    .then(res => {
      const gethistory = JSON.parse(res.data);
      const id = gethistory[0].subscription_id;
      this.setState({ gethistory });
      this.getPlan(id);
      console.log(gethistory);
    })
    .catch(error => {
      console.log(error);
    });
}

//Congelar Plan
Congelar() {
  const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const userid =data[0].user_id;
  //const userid = localStorage.getItem("user_id")
  //console.log(userid); 
  axios
    .post("https://localhost:44356/api/FreezeSubscription" , { 
        user_id:userid
    })
    .then(response => { swal("Subscripsion Congelada!", {
      icon: "success",
      });
    })
    .catch(error => {
      swal("Error!", "Falla al Congelar Contrato", "error");
    });
}
//COnsulta CAncelar Plan
Cancelar(){ 
  const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const userid =data[0].user_id;
  //const userid = localStorage.getItem("userid");
  //console.log(userid)
  axios
    .post("https://localhost:44356/api/CancelSub" , { 
        user_id:userid  
    })
    .then(response => { swal("Subscripsion Cancelada!", {
      icon: "success",
      });
    })
    .catch(error => {
      swal("Error!", "Falla al Cancelar Contrato", "error");
    });
}

  render() {
    if (localStorage.getItem("isLogged") == "true") {
      return (
        <div>
          <Header />
          <h3>
             Suscripcion de:  {this.state.username}
          </h3>
          <br></br>
          <div>
            <Container>
            <Infoplan state={this.state} />
            <FormGroup row><Col><Button>
                    Cambiar de Plan
                  </Button></Col>
                  <Col><Button onClick={()=>this.Congelar()}>
                    Congelar Plan
                  </Button></Col>
                  <Col><Button onClick={()=>this.Cancelar()}>
                    Cancelar Plan
                  </Button></Col>
              </FormGroup>
            </Container>
            <ToastContainer />
          </div>
          <h4>Historial de Pago</h4>
          <table class="table table-bordered order-table ">
            
              <thead>
                <tr>
                  <th>Nombre del Plan</th>
                  <th>Fecha de Pago</th>
                  <th>Fecha de Culminacion</th>
                </tr>
              </thead>
              <tbody id='bodytable'>{this.renderList()}</tbody>
            </table>
        </div>
      );
    } else {
      return (
        <div>
          {
            (console.log("cerrando sesion"),
            localStorage.clear(),
            this.logout())
          }
        </div>
      );
    }
  }
  renderList() {
    return this.state.gethistory.map(data => {
      return (
        <tr>
          <td>{data.subscription_id}</td>
          <td>{data.start_date}</td>
          <td>{data.end_date}</td>
          
        </tr>
      );
    });
  }
}

export default Suscription;