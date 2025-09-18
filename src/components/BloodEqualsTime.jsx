import React, { useState, useEffect } from "react";
import "../css/BloodEqualsTime.css";
import one from "../assets/images/graph/one.png";
import two from "../assets/images/graph/two.png";
import maskana from "../assets/images/graph/conclusion.svg";
import GraphCredit from "./GraphCredit";

const info = [
  {
    title: "גרף א'",
    img: one,
    explain:
      "ניתן לראות שבקרב פצועים שקיבלו מוצרי דם- תוך פחות מ15 דקות מרגע הגעת צוות פינוי אווירי, לעומת אלה שקיבלו תוך מעל 15 דקות- הייתה פחות תמותה. כלומר, הם שרדו יותר.",
  },
  {
    title: "גרף ב'",
    img: two,
    explain:
      "החוקרים בדקו את שיעורי התמותה לאחר 15 דקות מהגעת צוות פינוי אווירי. ניתן לראות שאין הבדל בתמותה בין פצועים שקיבלו מוצרי דם תוך 16-20 דקות ומעל ל-20 דקות מרגע הגעת צוות פינוי אווירי.",
  },
];

function BloodEqualsTime({ indexSubTitle }) {
  const [chosenBtn, setChosenBtn] = useState("one");
  const [indexGraph, setIndexGraph] = useState(0);

  useEffect(() => {
    if (chosenBtn === "one") {
      setIndexGraph(0);
    } else {
      setIndexGraph(1);
    }
  }, [chosenBtn]);

  return (
    <>
      {indexSubTitle !== 3 && (
        <p className="instruction-one">- לחצו כדי לעיין בגרפים -</p>
      )}

      <div className="blood-equals-time">
        {indexSubTitle !== 3 && (
          <>
            <div className="graph-btn-container">
              <div
                className={`graph-btn ${chosenBtn === "one" ? "chosen" : ""}`}
                onClick={() => setChosenBtn("one")}
              >
                גרף א'
              </div>
              <div
                className={`graph-btn ${chosenBtn === "two" ? "chosen" : ""}`}
                onClick={() => setChosenBtn("two")}
              >
                גרף ב'
              </div>
            </div>

            <div className="graph-container">
              <GraphCredit />
              <p className="graph-header">{info[indexGraph].title}</p>
              <img
                src={info[indexGraph].img}
                alt="graph"
                className="graph-img"
              />
              <p className="graph-text">{info[indexGraph].explain}</p>
            </div>
          </>
        )}
        {indexSubTitle === 3 && (
          <img
            src={maskana}
            alt="maskana"
            className="maskana hover-animation"
          />
        )}
      </div>
    </>
  );
}

export default BloodEqualsTime;
