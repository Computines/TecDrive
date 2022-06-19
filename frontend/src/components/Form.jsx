import React from "react";
import {v4 as uuidv4} from "uuid";
import { useLocation } from "wouter";
import "../styles/Form.css";
import axios from "axios";
import Global from "../Global";

function Pair ({name, type, reference}) {
    name += ":";
    return (
        <>
        <label htmlFor={name}>{name}</label>
        <input type={type} id={name} name={name} ref={reference} className="input" />
        </>
    )
}

function Form(props) {

    const url = Global.url;

    const [ , setLocation] = useLocation();

    let userRef = React.createRef();
    let emailRef = React.createRef();
    let passRef = React.createRef();

    let changes = {
        inputs: [
            ["Username", "text", userRef],
            ["Email", "email", emailRef],
            ["Password", "password", passRef]
        ],

        btnText: "Join Now",

        style: {padding: "30px 30px"},
    };
    
    if (props.formType === "login") {
        changes = {
            inputs: [
                ["Username / Email", "text", userRef],
                ["Password", "password", passRef]
            ],
    
            btnText: "Log In",
    
            style: {padding: "70px 30px"},
        };
    }

    let user = {
        username: "",
        email: "",
        password: "",
    }

    const handleChange = () => {
        if (props.formType === "login") {
            user = {
                username: userRef.current.value,
                password: passRef.current.value,
            }
        }
        else {
            user = {
                username: userRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value,
            }
        }
    }

    const sendData = (e) => {
        e.preventDefault();
        handleChange();
        if (props.formType === "login") {
        
        }
        else {
            axios.post(url + "/create", user)
            .then(res => {
                if (res.data.success) {
                    setLocation("/user/" + user.username);
                } else {
                    alert(res.data.message);
                }
            })
        }

    }
    
    return (
        <div className="form" style={changes.style}>
            <form onSubmit={sendData}>
                {changes.inputs.map((input, index) => {
                    return (
                        <Pair key={uuidv4()} name={input[0]} type={input[1]} reference={input[2]} />
                    )
                })}
                <input className="submit-btn" type="submit" value={changes.btnText} />
            </form>
        </div>
    );
}

export default Form;