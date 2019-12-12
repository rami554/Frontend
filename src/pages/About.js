import React from "react";
import img4 from "./img4.png";
import Header from "../components/Header";
class About extends React.Component {
  render() {
    
    return (
        <div class="aboutus-section"><Header />
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">BIENVENIDO A MOVIEPASS</h2>
                        <p class="aboutus-text">Moviepass permite a los fans del cine descubrir, comprar entradas y compartir su pasión por el cine de una manera más atractiva e interactiva. Fandango entretiene, informa y 
                        guía a todos los cinéfilos con los tráilers de todos los estrenos, entrevistas exclusivas, preestreno de las películas más taquilleras, las mejores noticias del mundo del cine.</p>
                        <p class="aboutus-text">Hacemos que sea fácil encontrar y comprar la película correcta en el momento adecuado.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src={img4} alt=""></img>
                    </div>
                </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
