import {forwardRef, useState} from 'react'
import {data} from './data'
import EmojiSearch from './EmojiSearch'
const Emojipicker = (props, inputRef) => {

  //cuando yo le doy click necesito mostrar un componente, una capa con elementos, para esso necesito manejar un estado, entonces sumo un usestate

  const [isOpen, setIsOpen] = useState(false)
  const [emojis, setEmojis] = useState(data)

function handleClickOpen(){
  setIsOpen(!isOpen) // apretando el button que agregue, si esta falso lo cambia a verdadero, y viceversa
}

function handleSearch(e){ //me busca por emoji
  const q = e.target.value.toLowerCase() //saco el valor 

  if(!!q){
    const search = data.filter((emoji) => {
      return (emoji.name.toLowerCase().includes(q) || 
      emoji.keywords.toLowerCase().includes(q) // si en los keywords o en el nombre del emoji coincide con lo que busco, me regresa la info a mi variable de search
    )
  }) //emojilist son mis datos importados, filtro para cada emoji y regreso aquellos emojis con emoji.name // q de query(consulta)

    setEmojis(search);
  }else{
    setEmojis(data) // si mi consulta esta vacia 
  }
}

 


  return (
   <div>
    <button onClick={handleClickOpen}>:D</button> {/* con este boton abro los emojis */}
    {isOpen ?      <div>
      <EmojiSearch onSearch={handleSearch}/> {/* para buscar los emojis */}
      <div>
        {emojis.map((emoji) =>  ( /* aca pongo el estado, emojis */
          <div key={emoji.symbol}>{emoji.symbol}</div> /* el symbol lo saco de data, el emojilist seria el data pero renombrado, tambien esta como el valor de inicio en useState */
          ))}
      </div>
     </div> : ''}
   </div>
  )
}

export default forwardRef(Emojipicker)