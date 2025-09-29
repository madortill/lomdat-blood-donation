import React, { useState, useEffect } from "react";
import "../css/PopOutBloodProducts.css";
import arrow from "../assets/images/arrow.png";
import one from "../assets/images/bloodProducts/one.png";
import two from "../assets/images/bloodProducts/two.mp4";
import three from "../assets/images/bloodProducts/three.png";
import four from "../assets/images/bloodProducts/four.png";
import five from "../assets/images/bloodProducts/five.png";
import drop from "../assets/images/bloodDrop.png";
import dropChart1 from "../assets/images/dropCharts/one.png";
import dropChart2 from "../assets/images/dropCharts/two.png";
import dropChart3 from "../assets/images/dropCharts/three.png";
import clickInstruct from "../assets/images/bloodProducts/showClick.png";

function PopOutBloodProducts({
  setShowNextBtn,
  indexBtn,
  setinPopOutBloodProducts,
  setCounterDoneBtns,
  counterDoneBtns,
}) {
  const arrInfo = [
    {
      headline: "דם מלא בצה”ל",
      text: [
        "שימוש דם מלא בצה”ל:",
        "תמורות בתחום החייאת בקרת נזקים בשדה לאורך השנים",
      ],
      graphUrl: [one, two],
    },
    {
      headline: "שימוש במוצרי דם לאורך השנים ",
      text: ["ניתן לראות שנותנים טיפול בנפח איכותי יותר לאורך השנים"],
      graphUrl: [three],
    },
    {
      headline: "גישה וסקולרית",
      text: ["נמדד בשנים 2018-2023:", "החזר נפח:"],
      graphUrl: [four, five],
    },
    {
      headline: "החזר נפח במלחמה",
      text: [""],
      graphUrl: [dropChart1, dropChart2, dropChart3],
    },
  ];

  const [indexInfo, setIndexInfo] = useState(0);
  const [clickedDrops, setClickedDrops] = useState([false, false, false]);

  // ✅ Initialize close button correctly
  const [showCloseBtn, setShowCloseBtn] = useState(() => {
    if (indexBtn === 0 && indexInfo === 1) return false; // hide first for video
    if ((indexBtn === 0 || indexBtn === 2) && indexInfo === 0) return false; // hide first slide
    return true; // show otherwise
  });

  useEffect(() => {
    let timer;

    if (indexBtn === 0 && indexInfo === 1) {
      setShowCloseBtn(false); // hide immediately
      timer = setTimeout(() => {
        setShowCloseBtn(true); // show after 5 sec
      }, 5000);
    } else if (((indexBtn === 0 || indexBtn === 2) && indexInfo === 0) || indexBtn === 3 && !isAllDropsClicked()) {
      setShowCloseBtn(false); // stay hidden
    } else {
      setShowCloseBtn(true); // show immediately
    }

    return () => clearTimeout(timer);
  }, [indexBtn, indexInfo]);

  const vasculaApproach = [
    [
      "165 מקרים של מתן מוצר דם (עם תיעוד זמנים מספק)",
      'זמנים נמדדו מהגעה של צוות אר"ן לאירוע',
      "השגת גישת IV - חציון= 10 דקות",
      "השגת גישה IO - חציון= 13 דקות",
    ],
    ['זמן חציוני עד הזלפת מוצר דם מרגע הגעת צוות אר"ן היה 20 דקות'],
  ];

  const arrDrops = [
    { text: "איכותי", url: one, isOpened: false },
    { text: "מהר", url: two, isOpened: false },
    { text: "הרבה", url: three, isOpened: false },
  ];

  function isAllDropsClicked() {
    return clickedDrops.every(Boolean);
  }

  return (
    <div className="blood-product">
      <div className="blood-product-headline">{arrInfo[indexBtn].headline}</div>
      <div className={`container-blood-product-info ${indexBtn === 3 ? "show-column" : ""}`}>
        {/* close button */}
        {showCloseBtn && (
          <p
            className="close-pop-out-btn to-right-arrow"
            onClick={() => {
              setinPopOutBloodProducts(false);
              if (indexBtn < 4 && counterDoneBtns === indexBtn) {
                setCounterDoneBtns((prev) => prev + 1);
              }
            }}
          >
            X
          </p>
        )}

        {indexBtn !== 3 && (
          <>
            {(indexBtn === 0 || indexBtn === 2) && (
              <img
                src={arrow}
                alt="arrow"
                className={`clock-arrow pop-blood-prod-arrow back-pop-arrow ${indexInfo === 0 ? "hide" : ""} to-right-arrow`}
                onClick={() => setIndexInfo(indexInfo - 1)}
              />
            )}

            <div>
              <p>{arrInfo[indexBtn].text[indexInfo]}</p>
              {indexBtn === 0 && indexInfo === 1 ? (
                <video src={two} autoPlay playsInline style={{ objectFit: "cover" }} className="graph-blood-prod" />
              ) : (
                <img
                  src={arrInfo[indexBtn].graphUrl[indexInfo]}
                  alt="img"
                  className={`graph-blood-prod ${indexBtn === 2 && indexInfo === 1 ? "fix-margin-graph" : ""}`}
                />
              )}
              {indexBtn === 2 && (
                <div className="second-graph">
                  {vasculaApproach[indexInfo].map((text, i) => (
                    <p className="fix-added-to-graph" key={i}>
                      {text}
                    </p>
                  ))}
                </div>
              )}
              {indexBtn === 2 && indexInfo === 1 && (
                <p>זמן חציוני עד הזלפת מוצר דם מרגע הגעת צוות אר”ן היה 20 דקות</p>
              )}
            </div>

            {(indexBtn === 0 || indexBtn === 2) && (
              <img
                src={arrow}
                alt="arrow"
                className={`clock-arrow pop-blood-prod-arrow next-pop-arrow ${indexInfo === 1 ? "hide" : ""}`}
                onClick={() => setIndexInfo(indexInfo + 1)}
              />
            )}
          </>
        )}

        {indexBtn === 3 && (
          <>
            <img src={clickInstruct} alt="instruct" className="instruct-click" />
            {arrDrops.map((d, index) => (
              <div className="row-drop-info" key={index}>
                <div
                  className="drop-container"
                  onClick={() => {
                    setClickedDrops((prev) => {
                      const newState = prev.map((val, i) => (i === index ? true : val));
                      if (newState.every(Boolean)){ setShowNextBtn(true); setShowCloseBtn(true);}
                      return newState;
                    });
                  }}
                >
                  <p className="drop-text">{d.text}</p>
                  <img className="drop-img" src={drop} alt="drop" />
                </div>

                <div className={`white-container white-bg ${!clickedDrops[index] ? "hide-display" : ""}`}>
                  <img src={arrInfo[indexBtn].graphUrl[index]} alt="graph" className="drop-graph" />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PopOutBloodProducts;
