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
      back: "נטפל אותו הדבר. פתיחת גישה נוספת למחזור הדם ומתן קריסטלואידים",
      color: "#FFAF02",
    },
  ];
  return (
    <div>
      <p className="bold">סוגי התגובות:</p>
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
