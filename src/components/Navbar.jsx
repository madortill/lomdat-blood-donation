import React, { useState } from "react";
import "../css/Navbar.css";
import SnakeNavbar from "./SnakeNavbar";
import burgerIconGrey from "../assets/images/navbar burger/grey.png";
import burgerIconRed from "../assets/images/navbar burger/red.png";

function Navbar(props) {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const subjArr = [
    "מבוא",
    "אינדיקציות למתן דם",
    "לוגיסטיקה",
    "ההכנה",
    "תגובות למנת דם",
    "לקחים",
    "מוצרי דם",
    "מבחן",
  ];
  const subjNum = props.subjNum;
  return (
    <>
      <div className="phone-navbar">
        <div className="the-stripe-topic">
          <p className="subj-text">{subjArr[subjNum]}</p>
        </div>

        <div
          className={`light-blue-circle ${showPhoneMenu ? "pop-out-menu" : ""}`}
        >
          {!showPhoneMenu ? (
            <img
              className="menu-icon"
              src={subjNum === 7 ? burgerIconRed :burgerIconGrey}
              alt="menu-icon"
              onClick={() => setShowPhoneMenu(true)} // open menu
            />
          ) : (
            <div className="menu-container">
              <p
                className="close-btn"
                onClick={() => setShowPhoneMenu(false)} // close menu
              >
                x
              </p>
              <SnakeNavbar  subjNum={subjNum} />
            </div>
          )}
        </div>
      </div>

      <div className="computer-navbar">
        <SnakeNavbar  subjNum={subjNum}/>
      </div>
    </>
  );
}

export default Navbar;
