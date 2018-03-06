import React from "react";
import "./ResultCard.css";

export default function ResultCard(props) {
    return (
            <div className="card">
                <h5 className="card-header">{props.name}</h5>
                <img src={props.img} alt={props.name} className="result-img" />
                <div className="result-description">
                    <p>{props.price} <span className="divider">|</span> {props.distance} mile(s) away </p>
                    <p><a href={props.yelp} target="_blank">Yelp</a><span className="divider"> | </span><a href={`https://www.google.com/maps/search/?api=1&query=${props.lat},${props.long}`} target="_blank">Open in Maps</a></p>
                </div>
            </div>
    )
}