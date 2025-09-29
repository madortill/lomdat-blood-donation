import React from 'react'
import ResponseSus from './ResponseSus'
import ResponsesTypes from './ResponsesTypes'

function Reactions({ numPartReactions, setShowNextBtn, finishedResponseSus, setFinishedResponseSus }) {
    const arrText= ["בשל שימוש בדם LTOWB צפי למס' מועט של תגובות", 'זכרו!', '']
  return (
    <div className='reactions'>
        <p className={numPartReactions === 1 ? 'bold' : ''}>{arrText[numPartReactions]}</p>
        {numPartReactions=== 0 &&
        <ResponseSus setShowNextBtn={setShowNextBtn} finishedResponseSus={finishedResponseSus} setFinishedResponseSus={setFinishedResponseSus}/>
        }
         {numPartReactions=== 1 &&
       <>
       <p>מדובר במוצר דם עם ת”ל! לתת באינדיקציה בלבד!</p>
       <ResponsesTypes/>
       </>
        }
      
    </div>
  )
}

export default Reactions
