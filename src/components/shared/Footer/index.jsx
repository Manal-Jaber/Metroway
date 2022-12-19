import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import EmailSubmission from "./email-submission";
import Logo from "components/shared/Logo";
import { pages } from "routesHandler";
import facebook from "assets/icons/facebook.svg";
import instagram from "assets/icons/instagram.svg";
import twitter from "assets/icons/twitter.svg";

// to be replace by backend data
const socialMedia = [
    {
        name: "facebook",
        logo: facebook,
        href: "https://www.facebook.com/"
    },
    {
        name: "instagram",
        logo: instagram,
        href: "https://www.instagram.com/"
    },
    {
        name: "twitter",
        logo: twitter,
        href: "https://twitter.com"
    }
]

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact-row">
                <Logo color="white"/>
                <div className="right-side d-flex flex-column flex-md-row">
                    <div className="description">
                        <p className="description-title">
                            Planning your next trip?
                        </p>
                        <p className="description-text">
                            Subscribe to our newsletter. Get the latest travel trends & deals!
                        </p>
                    </div>
                    <EmailSubmission/>
                </div>

            </div>
            <div className="pages-row d-flex flex-column flex-md-row justify-content-between">
                <ul className="pages-section d-flex flex-column flex-sm-row flex-wrap justify-content-between">
                    {pages.map((page, index)=>{
                        const { name, path } = page;
                        return (
                            <li key={index}>
                                <Link to={path} >{name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <ul className="social-media-section d-flex flex-row justify-content-between">
                    {socialMedia.map((item,index)=>{
                        const { name, logo, href } = item;
                        return (
                            <li key={index}>
                                <a href={href}>
                                    <img src={logo} alt={name}/>
                                </a>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </div>
    )
}
export default Footer;