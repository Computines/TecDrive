import React from "react";
import "../styles/FileViewer.css";

function FileViewer() {
  return (
    <div className="file-viewer">
      <div className="file-viewer-header">
        <p>Names</p>
        <p>Size</p>
      </div>
      <hr />
      <div className="file-viewer-content"></div>
    </div>
  );
}

export default FileViewer;
