import React from "react";
import it from "./it2.jpg";
import joker from "./joker.jpg";
import rambo from "./rambo.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
class Home extends React.Component {
  render() {
    return (
      <body>
        <div bgcolor='#000000'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                height='500px'
                src={it}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>It: Capítulo dos</h3>
                <p>Secuela de la exitosa película de terror del 2017.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                height='500px'
                src={rambo}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Rambo: Last Blood</h3>
                <p>Última aventura del conocido Rambo.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                height='500px'
                src={joker}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Joker</h3>
                <p>
                  Película de origen del famoso payaso criminal enemigo del
                  caballero de la noche
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </body>
    );
  }
}

export default Home;
