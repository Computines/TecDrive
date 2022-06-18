import React from "react";
import {v4 as uuidv4} from "uuid";
import "../styles/Form.css";

function Pair ({name, type}) {
    name += ":";
    return (
        <>
        <label htmlFor={name}>{name}</label>
        <input type={type} id={name} name={name} className="input"/>
        </>
    )
}

function Form(props) {

    let changes = {
        inputs: [
            ["Username", "text"],
            ["Email", "email"],
            ["Password", "password"]
        ],

        btnText: "Join Now",

        style: {padding: "30px 30px"},
    };

    
    if (props.formType === "login") {
        changes = {
            inputs: [
                ["Username / Email", "text"],
                ["Password", "password"]
            ],
    
            btnText: "Log In",
    
            style: {padding: "70px 30px"},
        };
    }
    
    return (
        <div className="form" style={changes.style}>
            <form>
                {changes.inputs.map((input, index) => {
                    return (
                        <Pair key={uuidv4()} name={input[0]} type={input[1]}/>
                    )
                })}
                <button type="submit" className="submit-btn">{changes.btnText}</button>
            </form>
        </div>
    );
}

export default Form;