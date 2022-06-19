import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";
import axios from "axios";
import FileViewer from "./FileViewer";
import FileInfo from "./FileInfo";
import download from "../assets/download.svg";
import upload from "../assets/upload.svg";
import { useLocation } from "wouter";
import Global from "../Global";

function UserPage({ params }) {
    const url = Global.url;

    const [, setLocation] = useLocation();

    const username = params.username;

    const fileRef = React.createRef();
    const tagsRef = React.createRef();

    const down = () => {
        if (selectedFile) {
            axios({
                url: `${url}/file/${selectedFile._id}`,
                method: "GET",
                responseType: "blob",
            }).then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", selectedFile.fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };

    const up = () => {
        setLocation("/upload/" + username);
    };

    const [files, setFiles] = useState([]);
    const [filters, setFilters] = useState({
        fileName: "",
        tag: "",
    });
    const [selectedFile, setSelectedFile] = useState({
        fileName: "",
        size: "",
        tag: [],
        _id: "",
    });
    useEffect(() => {
        axios.get(`${url}/list/${username}`).then((res) => {
            setFiles(res.data);
        });
    }, []);

    const handleChange = () => {
        setFilters({
            fileName: fileRef.current.value,
            tag: tagsRef.current.value,
        });
    };
    return (
        <div className="user-page">
            <div className="controls">
                <img src={upload} alt="upload" onClick={up} />
                <img src={download} alt="download" onClick={down} />
                <p>
                    Welcome back, <b>{params.username}</b>
                </p>
                <form className="filters">
                    <label htmlFor="tags">Tags:</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        ref={tagsRef}
                        onChange={handleChange}
                    />
                    <label htmlFor="file">File:</label>
                    <input
                        type="text"
                        id="file"
                        name="file"
                        ref={fileRef}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="content">
                <FileViewer
                    files={files}
                    filters={filters}
                    controller={setSelectedFile}
                />
                <FileInfo file={selectedFile} />
            </div>
        </div>
    );
}

export default UserPage;
