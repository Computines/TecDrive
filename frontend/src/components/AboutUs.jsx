import React from "react";
import Background from "./Background";
import Card from "./Card";
import "../styles/AboutUs.css";


function AboutUs() {
    return (
        <div className="about-us">
            <Background bg />
            <h1>About <b>Us</b></h1>
            <Card />
        </div>
    );
}

export default AboutUs;