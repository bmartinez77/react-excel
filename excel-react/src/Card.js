import React from "react";

const Card = (props) => {
    // console.log("This is card# ", props.ticketnumber)


    
    return (
    <div className="card" style={{ width: "100%" }}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <p>Invoice</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{borderStyle: "solid"}}>{props.ticketnumber}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <p>Customer</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{borderBottomStyle: "solid"}}>{props.customer}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <p>Trucker</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{borderBottomStyle: "solid"}}>{props.truckId} {props.truckco}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <p>P0# & Job</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{borderBottomStyle: "solid"}}>{props.po}</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col">
                            <p>Material</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{borderBottomStyle: "solid"}}>{props.product}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row d-flex">
                        <div className="col">
                            <div style={{borderStyle: "solid"}}>
                                <p className="text-center" style={{borderBottomStyle: "solid"}}>WT</p>
                                <p>{props.tons}</p>
                            </div>
                        </div>
      
                        <div className="col" >
                            <div style={{borderStyle: "solid"}}>
                                <p className="text-center" style={{borderBottomStyle: "solid"}}>Material Price</p>
                                <p>{props.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />

    </div>
        
    );
}
export default Card;