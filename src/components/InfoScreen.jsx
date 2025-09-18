import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../css/InfoScreen.css";
import data from "../data.json";
import Introduction from "./Introduction";
import next from "../assets/images/movingBtns/next.png";
import prev from "../assets/images/movingBtns/prev.png";
import AmericanQuestions from "./AmericanQuestions";
import Indications from "./Indications";
import Logistics from "./Logistics";
import Preparation from "./Preparation";
import Reactions from "./Reactions";
import Lessons from "./Lessons";
import BloodProducts from "./BloodProducts";
import EndScreen from "./EndScreen";

function InfoScreen() {
  //about introduction
  const [subjNum, setSubjNum] = useState(0);
  const [titleNum, setTitleNum] = useState(0);
  const [indexInfo, setIndexInfo] = useState(0);
  const [showDish, setShowDish] = useState(false);
  const [wasDishOpened, setWasDishOpened] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [numText, setNumText] = useState(0);
  //about definition
  const [finishDefinition, setFinishDefinition] = useState(false);
  //about indictions
  const [finishIndictions, setFinishIndictions] = useState(false);
  //about questions
  const [numQues, setNumQues] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [doneQuesArr, setDoneQuesArr] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  //aboutLogistics
  const [numLogisticsPart, setNumLogisticsPart] = useState(0);
  const [finishLogistics, setFinishLogistics] = useState(false);
  //about book
  const [doneReading, setDoneReading] = useState(false);
  //prepration
  const [numPartPreparation, setNumPartPreparation] = useState(0);
  //reactions
  const [numPartReactions, setNumPartReactions] = useState(0);
  //lessons
  const [numPartLesson, setNumPartLesson] = useState(0);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  //bloodProducts
  
  const [counterDoneBtns, setCounterDoneBtns] = useState(0);
  const [inPopOutBloodProducts, setinPopOutBloodProducts] = useState(false);

  


  useEffect(() => {
    if (showDish) {
      setWasDishOpened(true); // remember it was opened at least once
    }
  }, [showDish]);

  function markDone(index) {
    setDoneQuesArr((prev) => {
      const newArray = [...prev]; // copy the previous array
      newArray[index] = true; // update the dynamic index
      return newArray; // set the new array as state
    });
  }

  function nextPart() {
    switch (subjNum) {
      case 0:
        switch (indexInfo) {
          case 0:
            setTitleNum(titleNum + 1);
            setIndexInfo(indexInfo + 1);
            setShowPrevBtn(true);
            if (!wasDishOpened) {
              setShowNextBtn(false);
            }
            return;
          case 1:
            setIndexInfo(indexInfo + 1);
            setNumText((prev) => prev + 1);
            if (!finishDefinition) {
              setShowNextBtn(false);
            }
            return;
          case 2:
            if (!showQuestion) {
              setShowQuestion(true);
            } else {
              doneQues();
            }
            return;
          case 3:
            //if next from graphs
            if (numText === 2) {
              setNumText((prev) => prev + 1);
            } else {
              setSubjNum(1);
              if (!finishIndictions) {
                setShowNextBtn(false);
              }
            }
            return;
        }
        return;

      case 1:
        if (!showQuestion) {
          setShowQuestion(true);
        } else {
          doneQues();
          if (!doneReading) {
            setShowNextBtn(false);
          }
        }
        return;

      case 2:
        if (numLogisticsPart === 0 && !showQuestion) {
          setNumLogisticsPart(1);
          setShowQuestion(true);
        } else if (showQuestion) {
          doneQues();
          if (!finishLogistics) {
            setShowNextBtn(false);
          }
        } else {
          setSubjNum(subjNum + 1);
        }
        return;
      case 3:
        if (numPartPreparation === 0 || numPartPreparation === 1) {
          setNumPartPreparation((prev) => prev + 1);
        } else if (!showQuestion && numPartPreparation === 2) {
          setShowQuestion(true);
        } else if (showQuestion) {
          doneQues();
        }
        return;
      case 4:
        if (numPartReactions === 0) {
          setNumPartReactions((prev) => prev + 1);
        } else if (numPartReactions === 1 && !showQuestion) {
          setShowQuestion(true);
        } else {
          doneQues();
        }
        return;
      case 5:
        if (numPartLesson === 0) {
          setNumPartLesson((prev) => prev + 1);
        } else {
          setSubjNum(6);
          if(counterDoneBtns !== 4) {
            setShowNextBtn(false);
          }
        }
        return;
        case 6:
        setShowNextBtn(false);
        setSubjNum(7);
        return;
      default:
        return "Unknown part";
    }
  }

  function prevPart() {
    switch (subjNum) {
      case 0:
        switch (indexInfo) {
          case 1:
            setTitleNum(titleNum - 1);
            setIndexInfo(indexInfo - 1);
            setShowPrevBtn(false);
            setShowNextBtn(true);
            return;
          case 2:
            if (showQuestion) {
              setShowQuestion(false);
            } else {
              setIndexInfo(indexInfo - 1);
              setShowNextBtn(true);
              setNumText((prev) => prev - 1);
            }
            return;
          case 3:
            if (numText === 3) {
              setNumText((prev) => prev - 1);
            } else {
              backToQues();
              setIndexInfo(indexInfo - 1);
              setTitleNum(titleNum - 1);

              setNumText((prev) => prev - 1);
            }
            return;
        }

        return;
      case 1:
        if (!showQuestion) {
          setSubjNum(0);
          setTitleNum(2);
          setShowNextBtn(true);
        } else {
          setShowQuestion(false);
        }

        return;
      case 2:
        if (showQuestion) {
          setShowQuestion(false);
          setTitleNum(0);
          setNumLogisticsPart(0);
        } else if (titleNum === 0) {
          setShowNextBtn(true);
          setSubjNum(1);
          backToQues();
        } else {
          backToQues();
          setTitleNum((prev) => prev + 1);
        }
        return;
      case 3:
        if (numPartPreparation === 0) {
          setSubjNum(subjNum - 1);
        } else if (
          (!showQuestion && numPartPreparation === 2) ||
          numPartPreparation === 1
        ) {
          setNumPartPreparation((prev) => prev - 1);
        }
        if (showQuestion) {
          setShowQuestion(false);
        }
        return;
      case 4:
        if (numPartReactions === 0) {
          setSubjNum(subjNum - 1);
          backToQues();
        } else if (numPartReactions === 1 && !showQuestion) {
          setNumPartReactions((prev) => prev - 1);
        } else {
          setShowQuestion(false);
        }
        return;
      case 5:
        if (numPartLesson === 0) {
          setSubjNum((prev) => prev - 1);
          backToQues();
        } else {
          setNumPartLesson((prev) => prev - 1);
        }

        return;
        case 6:
          setSubjNum(5);
          setShowNextBtn(true);
          return;
          case 7:
            setShowNextBtn(true);
            setSubjNum(6);
          return;
      default:
        return "Unknown part";
    }
  }
  function backToQues() {
    setNumQues((prev) => prev - 1);
    setShowQuestion(true);
    setShowNextBtn(true);
  }

  function doneQues() {
    markDone(numQues);
    setNumQues((prev) => prev + 1);
    setShowQuestion(false);

    if (subjNum === 0) {
      setIndexInfo(indexInfo + 1);
      setTitleNum(titleNum + 1);
      setNumText((prev) => prev + 1);
    } else if (subjNum === 1) {
      setSubjNum(2);
      if(!doneReading) {
        setShowNextBtn(false);
      }
      setTitleNum(0);
    } else if (subjNum === 2) {
      setTitleNum(1);
      if (!finishLogistics) {
        setShowNextBtn(false);
      }
    } else if (subjNum === 3) {
      setSubjNum(4);
    } else if (subjNum === 4) {
      setSubjNum(5);
    }
  }

  return (
    <div className="info-screen">
      <Navbar subjNum={subjNum} />
      <div className="information-container">
        {!showQuestion && subjNum === 0 && (
          <>
            <p className="header-text">{data.titles[subjNum][titleNum]}</p>
            <Introduction
              indexInfo={indexInfo}
              setShowDish={setShowDish}
              showDish={showDish}
              setShowNextBtn={setShowNextBtn}
              numText={numText}
              setFinishDefinition={setFinishDefinition}
              finishDefinition={finishDefinition}
            />
          </>
        )}
        {showQuestion && (
          <AmericanQuestions
            numQues={numQues}
            setNumQues={setNumQues}
            setShowQuestion={setShowQuestion}
            doneQues={doneQues}
          />
        )}
        {!showQuestion && subjNum === 1 && (
          <>
            <p className="header-text">{data.titles[subjNum][0]}</p>
            <Indications
              setShowNextBtn={setShowNextBtn}
              setFinishIndictions={setFinishIndictions}
            />
          </>
        )}
        {!showQuestion && subjNum === 2 && (
          <>
            <p className="header-text">{data.titles[subjNum][titleNum]}</p>
            <Logistics
              numLogisticsPart={numLogisticsPart}
              setShowNextBtn={setShowNextBtn}
              setDoneReading={setDoneReading}
              setFinishLogistics={setFinishLogistics}
            />
          </>
        )}
        {!showQuestion && subjNum === 3 && (
          <>
            <p className="header-text">{data.titles[subjNum][0]}</p>
            <Preparation numPartPreparation={numPartPreparation} setShowQuestion={setShowQuestion}/>
          </>
        )}
        {!showQuestion && subjNum === 4 && (
          <>
            <p className="header-text">{data.titles[subjNum][0]}</p>
            <Reactions numPartReactions={numPartReactions} />
          </>
        )}
        {!showQuestion && subjNum === 5 && (
          <>
            <p className="header-text">{data.titles[subjNum][0]}</p>
            <Lessons numPartLesson={numPartLesson} setScrolledToBottom={setScrolledToBottom}/>
          </>
        )}
         {!showQuestion && subjNum === 6 && (
          <>
            <p className="header-text">{data.titles[subjNum][0]}</p>
            <BloodProducts setShowNextBtn={setShowNextBtn} inPopOutBloodProducts={inPopOutBloodProducts} setinPopOutBloodProducts={setinPopOutBloodProducts} counterDoneBtns={counterDoneBtns} setCounterDoneBtns={setCounterDoneBtns}/>
          </>
        )}
         {!showQuestion && subjNum === 7 && (
          <EndScreen/>
        )}
      </div>
      <div className="btns-container">
        {((!showDish && !showQuestion && !inPopOutBloodProducts) ||
          (showQuestion && doneQuesArr[numQues])) && (
          <>
            <img
              src={next}
              alt="next"
              onClick={nextPart}
              className={`moving-btn next ${(!showNextBtn || (subjNum=== 5 && numPartLesson === 1 && !scrolledToBottom)) ? "disable" : ""}`}
            />
            <img
              src={prev}
              alt="prev"
              onClick={prevPart}
              className={`moving-btn prev ${!showPrevBtn ? "disable" : ""}`}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default InfoScreen;
