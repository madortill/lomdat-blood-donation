import React, { useState } from "react";
import "../css/BloodProducts.css"; 
import PopOutBloodProducts from "./PopOutBloodProducts";


function BloodProducts({setShowNextBtn, inPopOutBloodProducts, setinPopOutBloodProducts, counterDoneBtns, setCounterDoneBtns}) {
  const btns = [
    {
      text: "דם מלא בצה”ל",
      color: "#D81F2B",
    },
    {
      text: "שימוש במוצרי הדם",
      color: "#E3404B",
    },
    {
      text: "גישה וסקולרית",
      color: "#F05C66",
    },
    {
      text: "החזר נפח במלחמה",
      color: "#F6868D",
    },
  ];
  const [numPopOut, setNumPopOut] = useState(0);

  return (
<div>
{!inPopOutBloodProducts &&
<>
<p>-לחצו על הנושא הרלוונטי-</p>
<div className="circles-btn-container">
    {btns.map((btn, index) => (
          <div key={index} style={{ "--color-btn": btn.color }}  className={`circle-btn ${index >counterDoneBtns ? "btn-disable" : ""}`} onClick={()=> {setinPopOutBloodProducts(true); setNumPopOut(index)}}>{btn.text}</div>
        ))}
</div>
</>
}

{inPopOutBloodProducts &&
<PopOutBloodProducts setShowNextBtn={setShowNextBtn} indexBtn={numPopOut} setinPopOutBloodProducts={setinPopOutBloodProducts} setCounterDoneBtns={setCounterDoneBtns} counterDoneBtns={counterDoneBtns}/>
}
</div>

  ); 
}

export default BloodProducts;
