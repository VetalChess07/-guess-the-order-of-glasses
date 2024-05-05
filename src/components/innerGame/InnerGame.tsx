import React, { useState } from 'react'

import { colorsArr } from '../../utils/colors'
import Cup from '../../ui/cup/Cup'

import style from "./style.module.scss"

const {inner, cupClass} = style







const InnerGame = ({arrTruf}) => {
   console.log(arrTruf)
   const [cups, setCups] = useState(colorsArr)
   const [curentCup, setCurentCup] = useState(null)
   const [countCurrect, setCountCurrect] = useState(0)

   const [currectAnswerOpen, setCurrectAnswerOpen] = useState(false)


   const onClikСheckingCups = (cupsList:any)=>{
    
      let count = 0
      const myArr = cupsList.map(cup => cup.color)
      for(const i in myArr){
         if(myArr[i] === arrTruf[i]) count++
      }
    
      setCountCurrect(count)
   }
   const onClickCurrectAnswerOpen = () =>{
      setCurrectAnswerOpen(!currectAnswerOpen)
   }

   const dragStartHandler =(e:any, cup:any)=>{
      setCurentCup(cup)
   }
   const dragLeaveHandler=(e:any)=>{}
   const dragEndHandler =(e:any)=>{
      e.target.style.borderColor = '#000'
   }
   const dragOverHandler=(e:any)=>{
      e.preventDefault()
      e.target.style.borderColor = 'grey'
   }
   const dragDropHandler =(e:any, cupTarget:any)=>{
      e.preventDefault()
      setCups(cups.map(cup =>{
      if(cup.color == cupTarget.color){
         return {...cup, order:curentCup.order}
      }
      if(cup.color == curentCup.color){
         return {...cup, order:cupTarget.order}
      }
      return cup
    } ))
   }

   const sortCup = (a,b)=>{
      if(a.order > b.order){
         return 1
      }
      else{
         return -1
      }
   }

  return (
   <div>
      {
         countCurrect === cups.length ? "ты победил!"
         :
         <>
            <div className={inner}>
         {
         cups.sort(sortCup).map(color => 
            <div
         
            key={color.color}
            onDragStart={(e)=>dragStartHandler(e, color)} 
            onDragLeave={(e)=>dragLeaveHandler(e)}
            onDragEnd={(e)=>dragEndHandler(e)}
            onDragOver={(e)=>dragOverHandler(e)}
            onDrop={(e)=>dragDropHandler(e, color)}
            draggable={true} 
            style={{background:color.color}}
            className={cupClass}
            >
         
            </div>   
         )
         }
      
         </div>
         <button onClick={()=>onClikСheckingCups(cups) }>Проверка!</button>
         <br />
         {countCurrect}
         </>
      }

         <br />
         <br />
         <p>нажать ниже если очень тупой)</p>
         <div onClick={onClickCurrectAnswerOpen}>
            {
               currectAnswerOpen
               ?<>
               закрыть
               <ul>
                  {arrTruf.map(el =>
                     <li className={inner} key={el}>{el}</li>
                  
                  )}
               </ul>
               </>
               : "я тупой("
            }
         </div>
    
      
   </div>
   
  )
}

export default InnerGame
