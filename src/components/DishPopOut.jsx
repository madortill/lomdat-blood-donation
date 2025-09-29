import React, { useState } from "react";
import "../css/DishPopOut.css";
import table from "../assets/images/tableIntroduction.png";
import arrow from "../assets/images/arrow.png";

function DishPopOut({ setShowDish, setShowNextBtn }) {
  const [partNum, setPartNum] = useState(0);
  const handleArrowClick = () => {
    if (partNum === 0) {
      setPartNum(1);
    } else if (partNum === 1) {
      setPartNum(0);
    }
  };

  const advArr = [
    "לוגיסטית- קל יותר לייצר תנאים לשקית אחת של מוצר מאשר לשלוש שקיות שונות של מוצר ",
    "בדם המלא יש יותר פקטורי קרישה, פחות חומרים משמרים של פקטורי הקרישה",
    "חושפים את המטופלים שלנו לתורם 1 במקום מספר תורמים",
  ];

  return (
    <div
      className={`dish-pop-out-container ${partNum === 1 ? "part-two" : ""}`}
    >
      {partNum === 0 && (
        <p>
          הדם המלא שנותנים בשטח, הוא דם הכולל את כל רכיביו ולא רכיבי דם במנות
          נפרדות . כלומר- מנה אחת שכוללת את כל הרכיבים
        </p>
      )}
      {partNum === 1 && (
        <>
          <p
            onClick={() => {
              setShowDish(false);
              setShowNextBtn(true);
            }}
            className="close-dish-btn"
          >
            X
          </p>
          <p className="bold">:יתרונות לדם מלא</p>
          {advArr.map((info, index) => (
            <p key={index} className="row">{info}</p>
          ))}
        </>
      )}
      <img src={table} alt="table" className={`table ${partNum === 1 ? "second-table" : ""}`} />
      <img
        src={arrow}
        alt="arrow"
        className={`arrow ${partNum === 1 ? "prev-arrow" : ""}`}
        onClick={handleArrowClick}
      />
    </div>
  );
}

export default DishPopOut;
