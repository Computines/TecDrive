import React from "react";
import "../styles/FileViewer.css";

function FileViewer({ files, filters, controller }) {

  return (
    <div className="file-viewer">
      <div className="file-viewer-header">
        <p>Name</p>
        <p>Size</p>
      </div>
      <hr />
      <div className="file-viewer-content">
        {files.map(file => {
          if (
            (filters.fileName.length > 0 ? file.fileName.toLowerCase().includes(filters.fileName.toLowerCase()) : true) &&
            (filters.tag.length > 0 ? file.tag.map(t => t.includes(filters.tag)).includes(true) : true)
          ) {
            return (
              <div key={file._id} className="file-viewer-item" id={file._id} onClick={() => {
                if (document.getElementsByClassName("--active")[0] !== undefined) {
                  document.getElementsByClassName("--active")[0].classList.remove("--active");
                }  
                controller(file)
                document.getElementById(file._id).classList.add("--active");
              }}>
                <p>{file.fileName}</p>
                <p>{file.size}</p>
              </div>
            )
          }
          else
          {
            return <></>;
          }
        })}
      </div>
    </div>
  );
}

export default FileViewer;
