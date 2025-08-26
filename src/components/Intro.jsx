import React from "react";
import "../css/Intro.css";

function Intro() {
  const infoArr = [
    "כדי להיות מוסמכים למתן דם מלא,",
    'מטפלים בכירים צריכים לעמוד',
    'במספר קריטריונים:',
    "אחת לשנה",
    "מעבר של הלומדה",
    "מעבר מבחן בקמפוס הדיגיטלי ",
    "אחת לשירות",
    "תחקיר מנת דם פגת תוקף",
  ];
  return (
    <div className="intro">
      <div className="intro-container">
        <p className="header">דגשים ללומדה</p>
        <div className="the-type-writer type-writer">
        {infoArr.map((text, index) => (
          <p
            key={index}
            style={{
              "--delay": `${index * 2}s`,
              "--width": `${text.length}ch`,
            }}
            className={index === 3 || index === 6 ? 'sub-title' : ''}
          >
            {text}
          </p>
        ))}
      </div>
      </div>
     
      <div className="btn grow-rotate">!הבנתי</div>
    </div>
  );
}

export default Intro;
