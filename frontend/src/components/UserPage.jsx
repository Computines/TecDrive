import React from "react";
import "../styles/UserPage.css"
import FileViewer from "./FileViewer";
import FileInfo from "./FileInfo";
import download from "../assets/download.svg";
import upload from "../assets/upload.svg";
import { useLocation } from "wouter";

function UserPage({ params }) {

    const [, setLocation] = useLocation();

    const down = () => {
        console.log("download");
    }

    const up = () => {
        setLocation("/upload/" + params.username);
    }

    return (
        <div className="user-page">
            <div className="controls">
                <img src={upload} alt="upload" onClick={up}/>
                <img src={download} alt="download" onClick={down}/>
                <p>Welcome back, <b>{params.username}</b></p>
            </div>
            <div className="content">
                <FileViewer />
                <FileInfo />
            </div>
        </div>    
    )
}


export default UserPage;