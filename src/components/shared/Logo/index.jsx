import React from "react";
import clsx from "clsx";

import "./index.scss";

const Logo = ({color}) => {
    return (
        <p className="logo">
            <span className={clsx(color)}>Metro</span>way
        </p>
    )
}
export default Logo;