import  { useState, DragEvent, useEffect } from 'react'

import { colorsArr } from '../../utils/colors'
import CupsContainer from '../cupContainer/CupContainer'
import Answer from '../../ui/answer/Answer'
import ButtonsDefault from '../../ui/buttons/buttonsDefault/ButtonsDefault'

import style from "./style.module.scss"

import { dragStartHandler, dragEndHandler, dragOverHandler,dragDropHandler, sortCup } from '../../utils/functionsDragDrop'
import { onClickCupReplace } from '../../utils/functionOnClick'
import { onClikСheckingCups } from '../../utils/functionsCheckGame'

import {ICup} from "../../type/cup.js"

const {inner,cupsStyle, text, count } = style




const InnerGame =  ({startArr, arrTruf, countCurrect, setCountCurrect,setCounterAttempts, counterAttempts}) => {
   
   const [cups, setCups] = useState<ICup[] | null>([])
   const [curentCup, setCurentCup] = useState<ICup | null>(null)
   
  
   useEffect(()=>{
      setCups(startArr)
   },[startArr])
  
   const dragStart =(e:DragEvent<HTMLDivElement>, cup:any)=>{
      dragStartHandler(e, cup, setCurentCup)
   }
   const dragLeaveHandler=(e:DragEvent<HTMLDivElement>)=>{}
   const dragEnd =(e:DragEvent<HTMLDivElement>):void=>{
      dragEndHandler(e, "transparent")
   }
   const dragOver=(e:DragEvent<HTMLDivElement>):void=>{
      dragOverHandler(e, "transparent")
   }
   const dragDrop =(e:DragEvent<HTMLDivElement>, cupTarget:any)=>{
      dragDropHandler(e, cupTarget ,cups, curentCup, setCups)
      setCurentCup(null)
   }
   const onClickCup = (e, cupTarget) =>{
     
      onClickCupReplace(e, cupTarget ,cups, curentCup, setCups ,setCurentCup)
     
   }

  return (
   <div className={inner}>
      
      
            <div className={cupsStyle}>
         {
            <CupsContainer
            curentCup={curentCup}
            onClickCupReplace={onClickCup}
               cups={cups.sort(sortCup)}
               dragStartHandler={dragStart}
               dragLeaveHandler={dragLeaveHandler}
               dragEndHandler={dragEnd}
               dragOverHandler={dragOver}
               dragDropHandler={dragDrop}
            />
         }
      
         </div>
         <ButtonsDefault onClick={()=>onClikСheckingCups(cups,arrTruf,setCounterAttempts,setCountCurrect) }>Проверка!</ButtonsDefault>
   
         <p className={text} >у вас щас правильно стоят <span className={count}> {countCurrect}</span> стаканов</p>
         <p>вы уже пытались {counterAttempts}</p>
       
         
         
         <Answer arrAnswer={arrTruf}/>
   </div>
   
  )
}

export default InnerGame
