import React from "react";
import "../css/StepsList.css";
import whiteBg from '../assets/images/whiteBgForBubble.svg';
import one from '../assets/images/list img/one.png';
import two from '../assets/images/list img/two.png';
import three from '../assets/images/list img/three.png';
import four from '../assets/images/list img/four.png';



function StepsList({arr}) {
  const icons = [one, two, three, four]; // store in array

  return (
    <>
      {arr.map((info, index) => (
        <div
          key={index}
          className="bubble"
         
        >
          <p className="the-info">{info}</p>
          <img
            className="fix-pos"
            src={whiteBg}
            alt="whiteBgForBubble"
          />
          <img className="icon" src={icons[index % icons.length]} alt="icon" />
        </div>
      ))}
    </>
  );
}

export default StepsList;