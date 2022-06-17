import React from "react";
import "../styles/Background.css";

function Background(props) {
  
  let circle3 = {
    left: "-107px",
    bottom: "-196px"
  }
  if (props.bg) {
    circle3 = {
      left: "calc(50% - 600px/2 - 364px)",
      bottom: "-268px"
    }
  }

  return (
    <div className="background">
        <div className="bg-circle" id="circle-1"></div>
        <div className="bg-circle" id="circle-2"></div>
        <div className="bg-circle" id="circle-3" style={circle3}></div>
        <div className="bg-footer"></div>
    </div>
    );
}

export default Background;