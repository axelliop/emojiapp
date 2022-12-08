import React, { useState } from 'react'

const EmojiSearch = ({onSearch}) => {

    const [value, setValue] = useState("")

    function handleChange(e){
        setValue(e.target.value) //cada vez que se modifique el texto del input sucedera esto, y llamamos a onSearch
        onSearch(e)
    }
  return (
    <input type="text" onChange={handleChange} value={value}></input>
  )
}

export default EmojiSearch