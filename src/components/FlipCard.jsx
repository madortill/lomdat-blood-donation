import React, { useState, useEffect } from "react";
import "../css/FlipCard.css"; // put your css here

function FlipCard({ imgUrl, backText, color = "#F88C01", onAllFlipped, isBloodBag }) {
  const [onStart, setOnStart] = useState("start");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnStart("off");
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleHover = () => {
    if (!hovered) {
      setHovered(true);
      if (onAllFlipped) onAllFlipped(); // optional callback
    }
  };

  return (
    <div className={`flip-card ${onStart} ${isBloodBag? "change-bag-size" : ""}`}    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          onMouseOver={handleHover}
        >
          <img src={imgUrl} alt="front" className="imgFront" />
        </div>
        <div
          className="flip-card-back"
          style={{ "--dynamic-color": color }}
        >
          <p className="textBack">{backText}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
