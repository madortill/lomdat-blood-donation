import React from "react";
import "../css/StepsList.css";
import whiteBg from "../assets/images/whiteBgForBubble.svg";
import one1 from "../assets/images/list img/first/one.png";
import two1 from "../assets/images/list img/first/two.png";
import three1 from "../assets/images/list img/first/three.png";
import four1 from "../assets/images/list img/first/four.png";
import one2 from "../assets/images/list img/second/one.png";
import two2 from "../assets/images/list img/second/two.png";
import three2 from "../assets/images/list img/second/three.png";
import four2 from "../assets/images/list img/second/four.png";
import five2 from "../assets/images/list img/second/five.png";

function StepsList({ arr }) {
  const icons1 = [one1, two1, three1, four1]; // store in array
  const icons2 = [one2, two2, three2, four2, five2]; // store in array
  const selectedIcons = arr.length === 5 ? icons2 : icons1;
  return (
    <>
      {arr.map((info, index) => (
        <div key={index} className="bubble-wrapper">
        <div className="bubble">
          <p className="the-info">{info}</p>
          <img className="fix-pos" src={whiteBg} alt="whiteBgForBubble" />
          {arr.length === 4 && (
            <img
              className="icon icon1"
              src={selectedIcons[index % selectedIcons.length]}
              alt={`icon-${index}`}
            />
          )}
          {arr.length === 5 && (
            <img
              className={`icon icon2 ${index === 3 ? "the-four" : ""} ${
                index === 4 ? "the-five" : ""
              }`}
              src={selectedIcons[index % selectedIcons.length]}
              alt={`icon-${index}`}
            />
          )}
        </div>
      
        {/* ✅ This escapes .bubble's overflow:hidden */}
        {arr.length === 5 && <div className="number">{index + 1}</div>}
      </div>
      
      ))}
    </>
  );
}

export default StepsList;
