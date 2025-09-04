import React, { useState } from "react";
import "../css/LomdaInfo.css"; 
import tillLogo from '../assets/images/logos/til.png';

const LomdaInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const infoObject = {
   ":מפתחת לומדה": 'סמל דני שריקי',
        ":גרפיקאית": 'סמל דני שריקי',
        ":מומחה תוכן": 'רס"מ אולגה',
        ':רמ"ד טי"ל': 'רס"מ עדן בן חמו',
        ":גרסה": "ספטמבר 2025",
  };

  return (
    <div id="lomda-info">
      <p className="btn-info" onClick={() => showInfo ? setShowInfo(false) : setShowInfo(true)}>
        i
      </p>

      {showInfo && (
        <div className="info-container">
          <p className="close-info" onClick={() => setShowInfo(false)}>
            X
          </p>
          <ul className="info-list">
            {Object.entries(infoObject).map(([title, subTitle]) => (
              <li key={title} className="info">
                <span className="info-title">{title}</span>
                <br />
                <span>{subTitle}</span>
              </li>
            ))}
          </ul>
          <img src={tillLogo} alt="till" className="till-logo"/>
        </div>
      )}
    </div>
  );
};

export default LomdaInfo;
