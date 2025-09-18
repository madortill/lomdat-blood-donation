import React, { useState } from "react";
import "../css/AmericanQuestions.css";
import data from "../data.json";
import doneBtn from "../assets/images/doneQuesBtn.png";
import explainImg from "../assets/images/quesExplainImg.png";

function AmericanQuestions({ numQues, setNumQues, setShowQuestion, doneQues }) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(null);
  const question = data.questions[numQues];
  const [showExplain, setShowExplain] = useState(false);

  const checkAnswer = (answerId) => {
    if (clicked) return; // prevent double click
    setSelected(answerId);

    const isCorrect = String(answerId) === String(question.correctAnswer);
    if (isCorrect) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setSelected(null);

        // move to next question or emit event
        if (numQues < data.questions.length) {
          if (numQues !== 4) {
            setShowExplain(true);
          } else {
            doneQues();
          }
        }
      }, 1500);
    }

    return isCorrect;
  };

  return (
    <div id="american-questions">
      <h1 className="title-questionMultiple">{question.title}</h1>
      <div className={`div-mulQ ${showExplain ? "fix-explain" : ""}`}>
        {!showExplain && (
          <>
            <div className="row-ques">
              {[1, 2].map((id) => (
                <button
                  key={id}
                  id={id}
                  disabled={clicked}
                  onClick={() => checkAnswer(id)}
                  className={`pulse-button-hover 
                    ${selected === id ? (id === question.correctAnswer ? "correct" : "wrong") : ""} 
                    ${numQues === 4 ? "in-last-ques" : ""}`}
                >
                  {question[`ans${id}`]}
                </button>
              ))}
            </div>
            <div className="row-ques">
              {[3, 4].map((id) => (
                <button
                  key={id}
                  id={id}
                  disabled={clicked}
                  onClick={() => checkAnswer(id)}
                  className={`pulse-button-hover 
                    ${selected === id ? (id === question.correctAnswer ? "correct" : "wrong") : ""} 
                    ${numQues === 4 ? "in-last-ques" : ""}`}
                >
                  {question[`ans${id}`]}
                </button>
              ))}
            </div>
          </>
        )}
        {showExplain && (
          <>
            {numQues === 1 && (
              <img
                src={explainImg}
                alt="protocol"
                className="explain-protocol"
              />
            )}
            {question.Qtype !== 3 &&
            <p>{question.explain}</p>
            }
            {question.Qtype === 3 &&
            <>
            {question.explain.map((text, i) => (
                    <p className="explain-text" key={i}>
                      {text}
                    </p>
                  ))}
            </>
            }
            <img
              src={doneBtn}
              alt="done-btn"
              className="done-ques-btn jump-animation"
              onClick={() => {
                doneQues();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AmericanQuestions;
