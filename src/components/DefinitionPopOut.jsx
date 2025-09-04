import React from "react";
import "../css/DefinitionPopOut.css";

function DefinitionPopOut({ color, text, show }) {
  return (
    <div className={`container-pop-out ${show ? "fade-animation" : ""}`}>
      <svg
        className={`svg-pop-out ${show ? "" : "hide"}`}
        width="152"
        height="83"
        viewBox="0 0 152 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="22" width="152" height="61" rx="17" fill={color} />
        <path d="M76.5 0L82.1292 24H70.8708L76.5 0Z" fill={color} />
      </svg>
      <p className={`pop-out-text ${show ? "" : "hide"}`}>{text}</p>
    </div>
  );
}

export default DefinitionPopOut;
