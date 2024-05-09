import  { DragEvent } from 'react'
import { ICup } from '../type/cup'

export function dragStartHandler(e:DragEvent<HTMLElement>, cup:ICup, setF  ){
 setF(cup)
}
export function dragLeaveHandler(){}

export function dragEndHandler(e:DragEvent<HTMLDivElement>, color):void{
   // (e.target as HTMLDivElement).style.borderColor = color;
}

export function dragOverHandler(e:DragEvent<HTMLDivElement>, color:string):void{
   e.preventDefault();
   // (e.target as HTMLDivElement).style.borderColor = color;
}

export function dragDropHandler(e:DragEvent<HTMLDivElement>, cupTarget:any, cups:ICup[] ,curentCup:ICup, setF):void{
   e.preventDefault()
   setF(cups.map(cup =>{
   if(cup.color == cupTarget.color){
      return {...cup, order:curentCup.order}
   }
   if(cup.color == curentCup.color){
      return {...cup, order:cupTarget.order}
   }
   return cup
 } ))
}
export function sortCup(a,b){
   if(a.order > b.order){
      return 1
   }
   else{
      return -1
   }
}
