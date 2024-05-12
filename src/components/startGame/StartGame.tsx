import  { useState } from 'react'
import { startGame } from '../../utils/startGame'

import { colorsArr } from '../../utils/colors'
import { modeGame } from '../../utils/modeGame'

import style from "./style.module.scss"

const {cupClass, inner,innerBtn} = style

const heightCups = window.innerWidth >= 580 ? 120 : 80 

const StartGame = ({arrColors,setArrColors, startGameArr,setStartGameArr, setCurrectArr, setDataGame}) => {
 
  const [closeSelectMode, setCloseSelectMode] = useState<boolean>(false)

  


   const onClick =(cup) =>{
    const newCup = {
      order: startGameArr.length,
      color: cup.color
    }
      setStartGameArr(prev => [...prev,  newCup])
      setArrColors(arrColors.filter(el => el.color !== cup.color))
     
   }
   const onClickCounterCups =(el:unknown) =>{
    const newArr = colorsArr.slice(0, el.countCup)
    setCurrectArr(startGame(newArr))
    setArrColors(newArr)
    setCloseSelectMode(true)
    setDataGame(prev => [...prev, el.title])
   }
   

  return (
    <div>
      {
        closeSelectMode
        ? 
        <>  
          <h2>Нажимай на стканы тем самым ты их растеляешь</h2>
          <div className={inner}>
          { arrColors.map(el => <div  style={{borderBottom:`${heightCups}px solid ${el.color}`}} className={cupClass} key={el.color} onClick={() =>onClick(el)} ></div>) }
          </div>
        </> 
        : 
        <>
         <h2>Выберите режим игры</h2>
         <p>сколько стаканов у вас будет стаканов</p>
          <div className={innerBtn}>
          {
            modeGame.map(el => <button onClick={()=> onClickCounterCups(el)} key={el.countCup}>{el.title} <br /> <span>{el.countCup}</span></button> )
          }
          </div>
        </>
      }
     
     
    </div>
  )
}

export default StartGame
