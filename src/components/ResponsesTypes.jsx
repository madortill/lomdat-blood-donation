import React from "react";
import "../css/ResponsesTypes.css";
import card1 from "../assets/images/flipCard/one.png";
import card2 from "../assets/images/flipCard/two.png";
import card3 from "../assets/images/flipCard/three.png";

import FlipCard from "./FlipCard";

function ResponsesTypes() {
  const cards = [
    {
      img: card1,
      back: "אדרנלין, במהלך הפינוי סולמדרול. בהמשך הפינוי פתיחת גישה נוספת למחזור הדם ומתן קריסטלואידים  ",
      color: "#F88C01",
    },
    {
      img: card2,
      back: "במהלך הפינוי סולומדרול",
      color: "#FFAF02",
    },
    {
      img: card3,
      back: 'יש קושי להבדיל בשטח בין תגובה המוליטית (AHTR - מסכן חיים) ותגובת חום לא המוליטית (FNHTR) ולכן הטיפול בשתי התגובות זהה - פתיחת גישה נוספת למחזור הדם והרצת 1-2 ליטר של קריסטלואידים. יש לשלוח את מנת הדם שהופסקה יחד עם הפצוע לביה"ח לבדיקה מעבדתית. במקרה של תגובה אנפילקטית נלווית יש לטפל בהתאם.',
      color: "#FFAF02",
    },
  ];
  return (
    <div>
      <p className="bold header-responses">לאחר עצירת מנת הדם ומעבר לטיפול בפלזמה, יש להוסיף טיפול בהתאם לסוג התגובה</p>
      <div className="types-container">
        {cards.map((c, i) => (
          <FlipCard
            key={i}
            imgUrl={c.img}
            backText={c.back}
            color={c.color}
            isBloodBag={false}
          />
        ))}
      </div>
    </div>
  );
}

export default ResponsesTypes;
