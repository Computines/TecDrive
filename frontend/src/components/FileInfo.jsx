import React from "react";
import axios from "axios";
import Global from "../Global";
import "../styles/FileInfo.css";

function FileInfo({ file }) {
    
    const url = Global.url;

    const tagRef = React.useRef();

    const addTag = (e) => {
        const tag = tagRef.current.value;
        if (tag) {
            axios.put(`${url}/addtag`, { _id: file._id ,tag: tag, });
            tagRef.current.value = "";
        }
    }
    
    return (
    <div className="file-info">
      {file.fileName !== "" ? (
        <>
          <h2>{file.fileName}</h2>
          <p>tags: {file.tag.map(t => t + " ")}</p>
          <p>size: {file.size}</p>
          <form className="addTag" onSubmit={addTag}>
            <input type="text" id="newTag" ref={tagRef}/>
            <button type="submit">Add Tag</button>
          </form>
        </>
      ) : (
        <h2>No file selected</h2>
      )}
    </div>
  );
}

export default FileInfo;
