import React from "react";
import img2 from "./img2.png";
import './card-style.css';
const Card = props =>{
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <img src={img2} alt='imagen 1' className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Standar</h4>
                <p className="card-text text-secondary">11$ al mes</p>
                <a href="#" className="btn btn-outline-success">Suscribite</a>
            </div>
        </div>
    )
}

export default Card;