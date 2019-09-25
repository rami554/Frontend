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
                        <Card imgsrc={img1}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}/>
                    </div>
                </div>
            </div>
        );
    }
} 
export default Cards;