import React, { useState, useEffect } from "react";
import "../css/Definition.css";
import DefinitionPopOut from "./DefinitionPopOut";

function Definition({setShowNextBtn, showAdvantages, setShowAdvantages, finishDefinition}) {
  const [arrPopOut, setArrPopOut] = useState([
    {
      color: "#22A8FB",
      text: "מוחזק בקירור",
      show: false,
    },
    {
      color: "#D57D19",
      text: "טיטר נוגדנים נמוך",
      show: false,
    },
    {
      color: "#D81F2B",
      text: "+O מסוג",
      show: false,
    },
  ]);
  //varible if clicked on all the defenitins
  const [allShown, setAllShown] = useState(false);
  //varible if clicked on red circle
  // const [showAdvantages, setShowAdvantages] = useState(false);

  const advantageArr = [
    "מתאים לכל קבוצות הדם- ABO ",
    "בשל טיטר נוגדנים נמוך, פחות תגובות למקבלי הדם ",
    "רוב התורמים שבעלי סוג דם O, בעלי טיטר נוגדנים נמוך",
  ];

  //להראות לאחר לחיצה על מושג את הפופאווט בהתאם
  const showDefinitionPopOut = (index) => {
    setArrPopOut((prev) =>
      prev.map((item, i) => (i === index ? { ...item, show: true } : item))
    );
  };
  //בדיקה האם כל במושגים נלחצו והוראו כל הפופאווטים
  useEffect(() => {
    const allTrue = arrPopOut.every((item) => item.show === true);
    if (allTrue) {
      setAllShown(true);
    }
  }, [arrPopOut]);

  return (
    <>
      <p className="click-instruction">הסבר בלחיצה על המושגים</p>
      <div className="definition">
        <p>(LTOWB) </p>
        <div className="container-definition">
          <p className="blue" onClick={() => showDefinitionPopOut(0)}>
            Cold-stored
          </p>
          <p className="orange" onClick={() => showDefinitionPopOut(1)}>
            low-titer
          </p>
          <p className="red" onClick={() => showDefinitionPopOut(2)}>
            type O whole blood
          </p>
        </div>
      </div>
      <div className="container-specific-definition">
        {arrPopOut.map((pop, index) => (
          <DefinitionPopOut
            key={pop.text}
            show={pop.show}
            color={pop.color}
            text={pop.text}
          />
        ))}
      </div>
      {(allShown || finishDefinition) && (
        <div className="advantages-container ">
          <div
            className={`red-circle-btn ${
              !showAdvantages ? "red-circle-unclicked" : ""
            }`}
            onClick={() => {
              setShowAdvantages(true);
              setShowNextBtn(true);
            }}
          >
            <p className="fix-why-text">למה?</p>
          <p className="btn-definition">- לחצו -</p>
          </div>
          <div
            className={`white-container ${
              !showAdvantages ? "hide-display" : ""
            }`}
          >
            {advantageArr.map((info, index) => (
              <p key={index} className="advantage-text">
                {info}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Definition;
