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
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>ANUNCIANTES</h4>
                                    <p>Exhibe tus productos y servicios en cualquiera de nuestros portales regionales o en todos a la vez. Tenemos múltiples plataformas y formatos que se adaptan a todo tipo de productos. Vincula tu marca a una película en cartelera o un próximo estreno y aprovecha el ruido mediático y tráfico adicional que viene con la promoción de la película.</p>
                                </div>
                            </div>
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>DISTRIBUIDORES</h4>
                                    <p>Publicitar películas en Moviepass es altamente efectivo. A diferencia de otros medios, nuestro negocio es el cine. No hay mejor sitio para dar a conocer una película que aquel donde se puedan comprar entradas. Ponemos a tu disposición herramientas de inteligencia de negocio de la industria del cine que ningún otro sitio puede ofrecer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
