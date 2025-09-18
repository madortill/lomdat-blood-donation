import React from "react";
import Book from "./Book";
import Clock from "./Clock";

function Logistics({ numLogisticsPart, setShowNextBtn, setDoneReading, setFinishLogistics }) {
    const text = [
        "-דפדפו בלחיצה-",
        "בשל ירידה באפקטיביות של חלק מהרכיבים, השימוש בדם מלא",
   
      ];
    
  return (
    <div>
        <p>{text[numLogisticsPart]}</p>
      {numLogisticsPart === 0 && (
        <Book setShowNextBtn={setShowNextBtn} setDoneReading={setDoneReading} />
      )}
      {numLogisticsPart === 1 && (
        <>
        <p className="bold" >מוגבל בזמן</p>
        <Clock setShowNextBtn={setShowNextBtn} setFinishLogistics={setFinishLogistics}/>
        </>
      )}
    </div>
  );
}

export default Logistics;
