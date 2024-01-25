import React from "react";


const Card = (props) => {
    return (
        <div className="rating-card">
            <div className="rating-content">
                {props.openSpots > 1 ? <span className="badge"> ONLINE </span>: <span className="badge"> SOLD OUT </span>}
                <img src={`./images/${props.coverImg}`} className="cardImg"/>
                <div className="rating">
                    <img src="./images/Star.png" alt="star" className="star"/>
                    <span className="gray"> {props.stats.rating} </span>
                    <span className="gray">{props.stats.reviewCount} • </span>
                    <span> {props.location} </span>
                </div>
                <p> {props.title}</p>
                <p> <span className="bold">From ${props.price}</span> / person </p>
            </div>
        </div>
    )
}
export default Card