import type { ICup } from "../type/cup";

export function onClikСheckingCups(cupsList:ICup[], currectArr:string[], setCounterAttempts, setCountCurrect){
   let count = 0
   const myArr = cupsList.map(cup => cup.color)
   for(const i in myArr){
      if(myArr[i] === currectArr[i]) count++
   }
   setCounterAttempts(prev => prev+1)
   setCountCurrect(count)

}