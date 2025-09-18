import React, { useState } from "react";
import "../css/Indications.css";
import arrow from "../assets/images/arrow.png";
import protocolBtn from "../assets/images/protocolBtn.png";
import Protocol from "./Protocol";

const info = [
  "בצבא האינדיקציה היחידה למתן נפח לפצוע המדמם היא",
  "ייעוץ עם רופא (רלוונטי לפראמדיקים)",
  "מתן הדם יתבצע על ידי מטפל שהוסמך לכך. לא נמשיך בפעולה לאחר מעבר הפצוע ללבנת פינוי בה אין איש צוות שהוסמך למתן דם.",
];

function Indications({ setShowNextBtn, setFinishIndictions }) {
  const [show, setShow] = useState(false);
  const [textBtn, setTextBtn] = useState("?");
  const [showProtocol, setShowProtocol] = useState(false);

  return (
    <div className="indications">
      <p className="title-indications">האינדקציות העיקריות:</p>

      <div className="bubbles-container">
        {show && (
          <div className="more-info-bubble">
            <hr className="line" />
            האם הפצוע בהלם עמוק?
            <p className="red-hidden-bubble">
              לחץ דם סיסטולי נמוך מ-90 מ”מ כספית
            </p>
            <div className="arrow-container">
              <img src={arrow} alt="arrow" className="indications-arrow" />{" "}
              <p className="arrow-text">אם לא ניתן למדוד</p>
            </div>
            <div className="red-hidden-bubble">
              לחץ דם שאינו ניתן למדידה
              <div className="mini-hidden-text-container">
                <p>1. היעדר דופק רדיאלי</p>
                <p>או</p>
                <p>2. שינוי ברמת ההכרה (שאינו על רקע חבלת ראש או תרופות)</p>
              </div>
            </div>
          </div>
        )}

        {info.slice(0, 2).map((text, index) => (
          <div key={index} className="bubble-indications">
            <p className="text-indication">
              {text}
              {index === 0 && <span className="bold">הלם עמוק</span>}
            </p>
            {index === 0 && (
              <div
                className="more-info-btn"
                onClick={() => {
                  show
                    ? (setShow(false), setTextBtn("?"))
                    : (setShow(true), setShowNextBtn(true), setFinishIndictions(true), setTextBtn("X"));
                }}
              >
                <p className={`question-mark ${!show ? "jump-animation" : ""}`}>
                  {textBtn}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="title-indications">בכל מקרה של מתן דם:</p>
      <div className="bubble-indications">
        <p>{info[2]}</p>
      </div>
      <img
        src={protocolBtn}
        alt="protocol"
        className="protocol-btn"
        onClick={() => !showProtocol && setShowProtocol(true)}
      />
      {showProtocol && <Protocol setShowProtocol={setShowProtocol} />}
    </div>
  );
}

export default Indications;
