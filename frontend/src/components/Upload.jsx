import React, { useState } from "react";
import axios from "axios";
import Global from "../Global";
import { useLocation } from "wouter";
import "../styles/Upload.css";

function Upload({ params }) {
    const url = Global.url;
    const [, setLocation] = useLocation();

    const fileRef = React.createRef();
    const tagsRef = React.createRef();

    const [file, setFile] = useState("Select File");

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = fileRef.current.files[0];
        const tag = tagsRef.current.value;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("tag", tag);
        formData.append("username", params.username);

        axios
            .post(`${url}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res.data.success) {
                    alert("File uploaded successfully");
                } else {
                    alert(res.data.message);
                }
                setLocation("/user/" + params.username);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = (e) => {
        if (document.getElementById("file")) {
            setFile(document.getElementById("file").value.substring(12));
        }
    };
    return (
        <div className="upload">
            <div className="upload-content">
                <h1>
                    Upload Your <b>File.</b>
                </h1>
                <form onSubmit={handleSubmit} className="upload-form">
                    <label htmlFor="file">{file}</label>
                    <input
                        type="file"
                        id="file"
                        name="uploadedFile"
                        ref={fileRef}
                        className="file-input"
                        onChange={handleChange}
                    />
                    <label htmlFor="tag">Tag: </label>
                    <input
                        type="text"
                        id="tag"
                        name="uploadedTags"
                        ref={tagsRef}
                        className="tag-input"
                    />
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default Upload;
