import React, {Component} from 'react';
import Card from './CardsUI'

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Basico" content="mira 3 peliculas al mes"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Standar" content="mira 5 peliculas al mes"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Premiun" content=" mira 10 peliculas al mes"/>
                    </div>
                </div>
            </div>
        );
    }
} 
export default Cards;