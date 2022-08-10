import React from "react";
import Card from "./Card";

const CardList = (props) => {

    const cards = props.cardList.map((card) => {

        let prodPrice = 0

        if(card.product === "1 4 INCH SCREENED APACHE BROWN" || card.product === "3 8 INCH SCREENED APACHE BROWN"){
            prodPrice = 16.5
        }

        if(card.product === "1 4 INCH MINUS APACHE BROWN" || card.product === "3 8 INCH MINUS APACHE BROWN"){
            prodPrice = 12.5
        }

        if(card.product === "1 2 INCH SCREENED APACHE BROWN" || card.product === "5 8 INCH SCREENED APACHE BROWN"){
            prodPrice = 20
        }

        if(card.product === "3 4 INCH SCREENED APACHE BROWN" || card.product === "7 8 INCH SCREENED APACHE BROWN"){
            prodPrice = 18.50
        }

        if(card.product === "1 2 INCH MINUS APACHE BROWN" || card.product === "5 8 INCH MINUS APACHE BROWN"){
            prodPrice = 16.50
        }

        if(card.product === "3 4 INCH MINUS APACHE BROWN" || card.product === "7 8 INCH MINUS APACHE BROWN"){
            prodPrice = 14.50
        }

        if(card.product === "1 2 INCH SCREENED SUPERIOR GOLD" || card.product === "5 8 INCH SCREENED SUPERIOR GOLD"){
            prodPrice = 14.50
        }

        if(card.product === "4-10 INCH APACHE BROWN" || card.product === "4-8 INCH APACHE BROWN"){
            prodPrice = 24
        }


        // console.log("ID #: ", card.ticketnumber)
        console.log(card)
        return (   
        <Card key = {card.ticketnumber} ticketnumber={card.ticketnumber} truckId = {card.truckid} truckco = {card.truckco} product =
            {card.product} customer = {card.customer} po = {card.po} tons = {card.tons} price = {prodPrice}
            />
            
        );
    });
    return (<div className="container">{cards}</div>);

}

export default CardList;