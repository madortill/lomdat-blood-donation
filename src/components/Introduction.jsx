import React, { useState, useEffect } from "react";
import StepsList from "./StepsList";
import data from "../data.json";
import "../css/Introduction.css";
import drop1 from "../assets/images/drops/one.svg";
import drop2 from "../assets/images/drops/two.svg";
import DishPopOut from "./DishPopOut";
import Definition from "./Definition";
import BloodEqualsTime from "./BloodEqualsTime";

function Introduction({
  indexInfo,
  showDish,
  setShowDish,
  setShowNextBtn,
  numText,
  setFinishDefinition,
  finishDefinition
}) {
  const text = [
    " :פעולות מצילות חיים מרכזיות שנבצע לפצוע המדמם",
    ":בצבא נשתמש בסוג מנת דם",
    "מתן מוצרי דם סמוך לרגע הפציעה מעלה פרוגנוזה (סיכויי השרדות)",
    ":מסקנת החוקרים",
  ];


  // about definition
    //varible if clicked on red circle
    const [showAdvantages, setShowAdvantages] = useState(false);

  useEffect(() => {
    if (showAdvantages) {
      setFinishDefinition(true); 
    }
  }, [showAdvantages]);

  return (
    <div className="introduction">
      {indexInfo !== 1 && <p className="space-from-bottom">{text[numText]}</p>}

      {indexInfo === 0 && <StepsList arr={data.stepsArr.first} />}
      {indexInfo === 1 && !showDish && (
        <>
          <div>
            <img src={drop1} alt="drop" className="drop" />
            <img src={drop2} alt="drop" className="drop" />
          </div>

          <div className="dish-btn" onClick={() => setShowDish(true)}>
            הרכב המנה
          </div>
        </>
      )}

      {indexInfo === 1 && showDish && (
        <DishPopOut setShowDish={setShowDish} setShowNextBtn={setShowNextBtn} />
      )}

      {indexInfo === 2 && <Definition showAdvantages={showAdvantages} setShowAdvantages={setShowAdvantages} setShowNextBtn={setShowNextBtn} setFinishDefinition={setFinishDefinition} finishDefinition={finishDefinition}/>}
    {indexInfo === 3 &&<BloodEqualsTime indexSubTitle={numText}/> }

    
    </div>
  );
}

export default Introduction;
