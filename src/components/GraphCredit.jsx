import React, {useState} from 'react';
import "../css/GraphCredit.css";


const info= 'Shackelford SA, del Junco DJ, Powell-Dunford N, et al. Association of Prehospital Blood Product Transfusion During Medical Evacuation of Combat Casualties in Afghanistan With Acute and 30-Day Survival. JAMA. 2017;318(16):1581–1591. doi:10.1001/jama.2017.15097';

function GraphCredit() {
    const [showInfo, setShowInfo] = useState(false);

  return (
    <div id="lomda-info">
    <p className="btn-info" onClick={() => showInfo ? setShowInfo(false) : setShowInfo(true)}>
      i
    </p>

    {showInfo && (
      <div className="info-container fix-i-container-width">
        <p className="close-info fix-close-info" onClick={() => setShowInfo(false)}>
          X
        </p>
      
        <p className="credit">{info}</p>
      </div>
    )}
  </div>
  )
}

export default GraphCredit
