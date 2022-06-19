import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import "../styles/AboutUs.css";


function AboutUs() {
    const people = [0, 1, 2, 3]
    return (
        <div className="about-us">
            <h1>About <b>Us</b></h1>
            <div className="cards">
                {people.map((person) => {
                    return (
                        <Card key={uuidv4()} person={person} />
                    )
                })}
            </div>
        </div>
    );
}

export default AboutUs;