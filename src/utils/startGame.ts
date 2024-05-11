import { colorsArr } from "./colors";



export function startGame(startGameArr){
 
   const secretArr =startGameArr.map(el => el.color);

   function randomSortArr(arr:string[]){
      return arr.sort(() => Math.random() - 0.5)
   } 
   const newArr = randomSortArr(secretArr)
 
   return newArr
}