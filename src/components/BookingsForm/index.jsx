import React from "react";
import clsx from "clsx";

import "./index.scss";
import FormBody from "./form";

const BookingsForm = ({className}) => {
    return (
        <div className={clsx("bookings-form d-flex flex-column justify-content-center align-items-start",className)}>
            <p className="tag">Hello Travellers</p>
            <h1 className="title">made your booking experience easy!</h1>
            <p className="description">Train booking is a process of choosing and purchasing train seats online. It is an easy process but were are here to make it much better & simple.</p>
            <FormBody/>
        </div>
    )
}
export default BookingsForm;