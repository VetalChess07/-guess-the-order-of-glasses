import React, { useState } from 'react'
import Cup from '../../ui/cup/Cup'

import { colorsArr } from '../../utils/colors'

const StartGame = ({setStartGameArr}) => {
   const [arr, setArr ] = useState(colorsArr)

   const onClick =(cup) =>{
      setStartGameArr(prev => [...prev,  cup])
      setArr(arr.filter(el => el.color !== cup.color))
   }

  return (
    <div>
      {
        arr.map(el => <div key={el.color} onClick={() =>onClick(el)} >{el.color}</div>)
      }
    </div>
  )
}

export default StartGame
