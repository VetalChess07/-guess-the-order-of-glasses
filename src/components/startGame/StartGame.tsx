import  { useState } from 'react'
import { startGame } from '../../utils/startGame'

import { colorsArr } from '../../utils/colors'
import { modeGame } from '../../utils/modeGame'

const StartGame = ({arrColors,setArrColors, startGameArr,setStartGameArr, setCurrectArr}) => {
 
  const [closeSelectMode, setCloseSelectMode] = useState<boolean>(false)



   const onClick =(cup) =>{
    const newCup = {
      order: startGameArr.length,
      color: cup.color
    }
      setStartGameArr(prev => [...prev,  newCup])
      setArrColors(arrColors.filter(el => el.color !== cup.color))
   }
   const onClickCounterCups =(number:number) =>{
    const newArr = colorsArr.slice(0, number)
    setCurrectArr(startGame(newArr))
    setArrColors(newArr)
    setCloseSelectMode(true)
    
   }
   

  return (
    <div>
      {
        closeSelectMode
        ? 
        <>  
          <h2>Нажимай на стканы тем самым ты их растеляешь</h2>
          { arrColors.map(el => <div key={el.color} onClick={() =>onClick(el)} >{el.color}</div>) }
        </> 
        : 
        <>
         <h2>Выберите режим игры</h2>
          <div>
          {
            modeGame.map(el => <button onClick={()=> onClickCounterCups(el.countCup)} key={el.countCup}>{el.title} <br /> <span>{el.countCup}</span></button> )
          }
          </div>
        </>
      }
     
     
    </div>
  )
}

export default StartGame
