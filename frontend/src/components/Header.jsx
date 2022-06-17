import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "wouter";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="TecBox" className="logo" />
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/singup">Sing Up</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
        </ul>
    </header>
    );
}

export default Header;