import React, { Component } from "react";
import Card from "./CardsUI";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import axios from "axios";

class Cards extends Component {
  state = {
    planes: [],
    planes2: [],
    planes3: [],
    isLogged: false,
    redirect: "login"
  };
  componentDidMount() {
    this.getplanes();
    this.getplanes2();
    this.getplanes3();
    const isLogged = localStorage.getItem("isLogged");
    this.setState({ isLogged });
    if (isLogged) {
      const redirect = "suscripcion";
      this.setState({ redirect });
    } else {
      const redirect = "login";
      this.setState({ redirect });
    }
  }
  getplanes() {
    axios
      .get("https://localhost:44356/api/Subscription/1")
      .then(res => {
        const planes = JSON.parse(res.data);
        this.setState({ planes });
        console.log(planes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getplanes2() {
    axios
      .get("https://localhost:44356/api/Subscription/2")
      .then(res => {
        const planes2 = JSON.parse(res.data);
        this.setState({ planes2 });
        console.log(planes2);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getplanes3() {
    axios
      .get("https://localhost:44356/api/Subscription/3")
      .then(res => {
        const planes3 = JSON.parse(res.data);
        this.setState({ planes3 });
        console.log(planes3);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { titulo } = this.getplanes;
    return (
      <div className='container-fluid d-flex justify-content-center'>
        {this.state.planes.map(planes => (
          <div className='row'>
            <div className='col-md-4'>
              <Card
                imgsrc={img1}
                title={planes.name}
                content={planes.details}
                cost={planes.cost + " Bs"}
                redirect={this.state.redirect}
                id={planes.subscription_id}
              />
            </div>
          </div>
        ))}
        {this.state.planes2.map(planes2 => (
          <div className='row'>
            <div className='col-md-4'>
              <Card
                imgsrc={img2}
                title={planes2.name}
                content={planes2.details}
                cost={planes2.cost + " Bs"}
                redirect={this.state.redirect}
                id={planes2.subscription_id}
              />
            </div>
          </div>
        ))}
        {this.state.planes3.map(planes3 => (
          <div className='row'>
            <div className='col-md-4'>
              <Card
                imgsrc={img3}
                title={planes3.name}
                content={planes3.details}
                cost={planes3.cost + " Bs"}
                redirect={this.state.redirect}
                id={planes3.subscription_id}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Cards;
