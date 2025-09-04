import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/InfoScreen.css";
import data from "../data.json";
import Introduction from "./Introduction";
import next from '../assets/images/movingBtns/next.png';
import prev from '../assets/images/movingBtns/prev.png';

function InfoScreen() {
  const [subjNum, setSubjNum] = useState(0);
  const [titleNum, setTitleNum] = useState(0);
  const [indexInfo, setIndexInfo] = useState(0);
  const [showDish, setShowDish] = useState(false);
  const [wasDishOpened, setWasDishOpened] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [numText, setNumText] = useState(0);


  useEffect(() => {
    if (showDish) {
      setWasDishOpened(true); // remember it was opened at least once
    }
  }, [showDish]);

  function nextPart() {
    switch (subjNum) {
      case 0:
        if(indexInfo === 0 ) {
          setTitleNum(titleNum + 1);
          setIndexInfo(indexInfo + 1);
          setShowPrevBtn(true);
          if(!wasDishOpened) {
            setShowNextBtn(false);
          }
        } else if(indexInfo === 1) {
          setShowNextBtn(false);
          setIndexInfo(indexInfo + 1);
          setNumText((prev) => prev+1);
        }
        return;
      case 1:
        return "Second part";
      case 2:
        return "Third part";
      default:
        return "Unknown part";
    }
  }


  function prevPart() {
    switch (subjNum) {
      case 0:
        if(indexInfo === 1 ) {
          setTitleNum(titleNum - 1);
          setIndexInfo(indexInfo - 1);
          setShowPrevBtn(false);
          setShowNextBtn(true);
        } else if(indexInfo === 2 ) {
          setIndexInfo(indexInfo - 1);
          setShowNextBtn(true);
          setNumText((prev) => prev-1);

        }
        
        return;
      case 1:
        return "Second part";
      case 2:
        return "Third part";
      default:
        return "Unknown part";
    }
  }

  return (
    <div className="info-screen">
      <Navbar subjNum={subjNum} />
      <div className="information-container">
        <p className="header-text">{data.titles[subjNum][titleNum]}</p>
        <Introduction indexInfo={indexInfo} setShowDish={setShowDish} showDish={showDish} setShowNextBtn={setShowNextBtn} numText={numText} />
      </div>
      <div className="btns-container">
       {!showDish && <>
        {/* <button onClick={nextPart}>הבא</button>
      
        <button onClick={prevPart}>חזור</button> */}
        
        <img src={next} alt="next" onClick={nextPart} className={`moving-btn next ${!showNextBtn  ? "disable" : ""}`}/>
        <img src={prev} alt="next" onClick={prevPart}  className={`moving-btn prev ${!showPrevBtn ? "disable" : ""}`}/>
       </>} 
      </div>
    </div>
  );
}

export default InfoScreen;
