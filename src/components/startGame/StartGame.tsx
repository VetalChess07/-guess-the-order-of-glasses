import React, { useState } from 'react'
import Cup from '../../ui/cup/Cup'

import { colorsArr } from '../../utils/colors'

const StartGame = ({arrColors,setArrColors, startGameArr,setStartGameArr}) => {

   const onClick =(cup) =>{
    const newCup = {
      order: startGameArr.length,
      color: cup.color
    }
      setStartGameArr(prev => [...prev,  newCup])
      setArrColors(arrColors.filter(el => el.color !== cup.color))
   }

  return (
    <div>
      {
        arrColors.map(el => <div key={el.color} onClick={() =>onClick(el)} >{el.color}</div>)
      }
    </div>
  )
}

export default StartGame
