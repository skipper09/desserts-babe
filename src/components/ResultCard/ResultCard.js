import React from "react";
import "./ResultCard.css";

export default function ResultCard(props) {
    return (
    <div className="card"> 
        <h5 className="card-header">{props.name}</h5>
        <img src={props.img} alt={props.name} className="result-img"/>
        <div className="result-description">
        <p>{props.price} <span>|</span> {props.distance} mile(s) away </p>
        <p>{props.phone}</p>
        <p>Click to navigate</p>
        </div>
    </div>
    )
}