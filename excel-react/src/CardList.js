import React from "react";
import Card from "./Card";

const CardList = (props) => {

    const cards = props.cardList.map((card) => {

        console.log("ID #: ", card.ticketnumber)
        return (   
        <Card key = {card.ticketnumber} ticketnumber={card.ticketnumber} truckId = {card.truckid} truckco = {card.truckco} product =
            {card.product} customer = {card.customer} po = {card.po} tons = {card.tons}
            />
        );
    });
    return (<div className="container">{cards}</div>);

}

export default CardList;