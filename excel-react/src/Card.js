import React from "react";

const Card = (props) => {
    // console.log("This is card# ", props.ticketnumber)
    return (
        <div className="card" style={{ width: '12rem' }}>
            <div className="card-body">
                <label>Invoice #</label>
                <h5 className="card-title">{props.ticketnumber}</h5>
                <label>Customer</label>
                <p className="card-text">{props.customer}</p>
                <label>P.O.</label>
                <p className="card-text">{props.po}</p>
                <label>Trucker</label>
                <p className="card-text">{props.truckId} {props.truckco}</p>
                <label>Material</label>
                <p className="card-text">{props.product}</p>
                <label>Customer</label>
                <p className="card-text">{props.customer}</p>

             
            </div>
        </div>
    );
}
export default Card;