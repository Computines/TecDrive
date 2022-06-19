import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "wouter";

function Header({ user }) {
    let links = [
        { name: "About", path: "/aboutus" },
        { name: "Sing Up", path: "/singup" },
        { name: "Login", path: "/login" },
        { name: "Home", path: "/" }
    ];
    if (user) {
        links = [
            { name: "Log Out", path: "/" }
        ]
    }
    return (
        <header className="header">
            <div>
                <img src={logo} alt="TecBox" className="logo" />
                <p>tecBox</p>
            </div>
            <ul className="links">
                {links.map(link => {
                    return <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
                })}
            </ul>
        </header>
    );
}

export default Header;