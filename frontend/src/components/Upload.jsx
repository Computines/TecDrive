import React from "react";
import axios from "axios";
import Global from "../Global";
import { useLocation } from "wouter";


function Upload({ params }) {

    const url = Global.url;
    const [, setLocation] = useLocation();

    const fileRef = React.createRef();
    const tagsRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = fileRef.current.files[0];
        const tags = tagsRef.current.value;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("tags", tags);
        formData.append("username", params.username);

        axios.post(`${url}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            if (res.data.success) {
                alert("File uploaded successfully");
            } else {
                alert(res.data.message);
            }
            setLocation("/user/" + params.username);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="upload">
            <div className="upload-content">
                <h1>Upload Your <b>File.</b></h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="file">File: </label>
                    <input type="file" id="file" name="uploadedFile" ref={fileRef}/>
                    <label htmlFor="file">Tags: </label>
                    <input type="text" id="file" name="uploadedTags" ref={tagsRef}/>
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
}


export default Upload;