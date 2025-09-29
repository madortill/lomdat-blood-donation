import React from 'react'
import "../css/EndScreen.css";
import btn from '../assets/images/endScreen/btn.png';
import confetti from '../assets/images/endScreen/confetti.gif';
import bag from '../assets/images/endScreen/bagEndScreen.png';

function EndScreen() {
    const goToExam = () => {
        // Open in a new tab:
        window.open("https://campus.digital.idf.il/course/section.php?id=22997", "_blank");
    
        // Or, to open in the same tab:
        // window.location.href = "https://www.example.com";
      };
  return (
    <div className='end-screen '>
      <p className='end-headline'>וואו כל הכבוד!</p>
      <p>השלב הבא הוא המבחן - קטן עליכם...</p>
      <p>כשתרגישו מוכנים לחצו</p>
      <img src={btn} alt="button" className='to-exam-btn grow-rotate ' onClick={goToExam}/>
      <img className="confety" src={confetti} alt="confety GIF" />
      <img src={bag} alt="blood-bag" className='end-blood-bag'/>
    </div>
  )
}

export default EndScreen
