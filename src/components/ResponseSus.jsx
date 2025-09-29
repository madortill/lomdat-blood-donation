import React, { useEffect } from "react";
import "../css/ResponseSus.css";

function ResponseSus({setShowNextBtn, finishedResponseSus, setFinishedResponseSus}) {
  const arrInfo = [
    "קודם כל לעצור את המנה!",
    "נחליף את הדם בפלזמה.",
    "נתעד ונדווח בציר רפואה, על מנת ליידע את הדרגים הבאים על הפצוע שמגיע. ",
    " בהמשך נטפל בהתאם לסוג התגובה.",
  ];
  const bgColors = ['#D81F2B', '#E3404B', '#F05C66', '#EB8D94'];
  const batchSize = 2;

     // ⏱ only run if not finished
  useEffect(() => {
    if (!finishedResponseSus) {
      const timer = setTimeout(() => {
        setShowNextBtn(true);
        setFinishedResponseSus(true);
      }, 5000);

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [finishedResponseSus, setShowNextBtn]);

  // Split arrInfo into batches of 2
  const grouped = [];
  for (let i = 0; i < arrInfo.length; i += batchSize) {
    grouped.push(arrInfo.slice(i, i + batchSize));
  }

  return (
    <div className="fix-width">
      <p className="response-text">במידה ויש חשד לתגובה: </p>
      <div className="response-sus-container">
        {grouped.map((batch, batchIndex) => (
          <div className="response-batch" key={batchIndex}>
            {batch.map((info, index) => {
              const globalIndex = batchIndex * batchSize + index;
              return (
                <div
                  key={globalIndex}
                  className="container-response"
                  style={{ "--color": bgColors[globalIndex] }}
                >
                  <p className="response-number">{globalIndex + 1}</p>
                  <p>{info}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponseSus;
