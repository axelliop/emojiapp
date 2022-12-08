import React, { useRef } from 'react'
import Emojipicker from './Emojipicker'



const EmojipickerInput = () => {

  const refInput = useRef(null); //asigno una referencia atravez de usereft a mi input
  
  
  return (
    <div>
    <input ref={refInput}/>

   
    <Emojipicker ref={refInput}/>
    </div>
  )
}

export default EmojipickerInput