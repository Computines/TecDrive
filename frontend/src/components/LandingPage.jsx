import React from "react";
import Background from "./Bacground";
import "../styles/LandingPage.css";
import landingImg from "../assets/landing.png";
import { Link } from "wouter";

function LandingPage() {
  return (
    <div className="landing">
        <Background bg />
        <img className="landingImage" src={landingImg} alt="Happy Man" />
        <div className="ld-content">
          <h1>Secure Access To Your <b>Files</b></h1>
          <h2>Storaging has never been easier than now</h2>
          <Link to="/singup" className="btn-join">Join Now</Link>
        </div>
    </div>
  );
}

export default LandingPage;
