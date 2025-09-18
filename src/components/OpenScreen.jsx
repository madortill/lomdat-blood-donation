import React from "react";
import "../css/OpenScreen.css";
import { useState } from "react";
import bed from "../assets/images/hospitalBed.png";
import slogen from '../assets/images/logos/slogen.png';
import LomdaInfo from "./LomdaInfo";
import Intro from "./Intro";
import bloodyHeadline from '../assets/images/bloody-headline.gif'

function OpenScreen() {
  const [showIntro, setShowIntro] = useState(false);

  const handleStart = () => {
    setShowIntro(true);
  };

  return (
    <div className="open-screen">
      <LomdaInfo />

      {!showIntro ? (
        <>
        <div className="to-right">
          <p className="lomda-header">לומדת</p>
          <img src={bloodyHeadline} alt="headline" className="bloody-headline"/>
          <div
            className="start-btn grow-rotate"
            onClick={handleStart}  
          >
            התחל
          </div>
        </div>
        <div className="to-left">
      <img src={bed} alt="bed" className="hospial-bed"/>
      </div>
        </>
      ) : (
        <Intro />
      )}
      
      <img src={slogen} alt="slogen" className="slogen"/>
    </div>
  );
}


export default OpenScreen;
