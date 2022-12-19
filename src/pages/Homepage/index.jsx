import React from "react";

import "./index.scss";

import BookingsForm from "components/BookingsForm";
import train from "assets/pictures/train.png"

const Homepage = () => {
    return (
        <div className="homepage d-flex flex-column flex-md-row-reverse justify-content-between row">
            <img src={train} alt="train" className="train col-md-6"/>
            <BookingsForm className="col-md-6"/>
        </div>
    );
}
export default Homepage;