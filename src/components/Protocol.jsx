import React from 'react'
import protocol from '../assets/images/protocol.svg';
function Protocol({setShowProtocol}) {
  return (
    <div className='protocol-container-img'>
        <p className='close-btn-protocol' onClick={()=> {setShowProtocol(false)}}>X</p>
      <img src={protocol} alt="protocol" className='protocol-img'/>
    </div>
  )
}

export default Protocol
