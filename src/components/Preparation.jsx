import React, { useState } from "react";
import "../css/Preparation.css";
import data from "../data.json";
import video from "../assets/images/video.png";
import StepsList from "./StepsList";

function Preparation({ numPartPreparation, setShowQuestion }) {

  return (
    <div className="preparation">
      {numPartPreparation === 0 && (
        <img src={video} alt="video" className="video" />
      )}

      {(numPartPreparation === 1 || numPartPreparation === 2) && (
        <>
          <p className="space-from-bottom">
            השלבים במתן המנה (לאחר הערכת הפצוע וקבלת אישור):
          </p>
          <StepsList arr={data.stepsArr.second} />
        </>
      )}

      {numPartPreparation === 2  && (
        <div className="preparation-pop-out">
          <p
          className="close-pop-out-btn"
          onClick={() => {
            setShowQuestion(true);
          }}
        >
          X
        </p>
          {/* <p className="close-btn">X</p> */}
          <p className="bold red">במידה וה- QINFLOW לא עובד</p>
          <p>לתת את המנה למרות הטמפ’ הנמוכה!</p>
        </div>
      )}
    </div>
  );
}

export default Preparation;
