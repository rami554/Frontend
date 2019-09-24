import React, {Component} from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import About from "./About";

class carousel extends Component{
    render() {
        return(
            <carousel>
                <div>
                    <img src="https://images.app.goo.gl/ArcojQ39qer7DPns5" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.app.goo.gl/AoKdy8khkpUvw5NLA"  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.app.goo.gl/VGib5Hmn6sUFADpv9" />
                    <p className="legend">Legend 3</p>
                </div>
            </carousel>
        );
    }
}
export default carousel;