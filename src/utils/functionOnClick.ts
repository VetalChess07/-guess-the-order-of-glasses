export function onClickCupReplace(e, cupTarget ,cups, curentCup, setCups, setCurentCup){
   
 
   if(!curentCup){
      setCurentCup(cupTarget)

   }else{
      
        setCups(cups.map(cup =>{
      
      if(cup.color == cupTarget.color){
         return {...cup, order:curentCup.order}
      }
      if(cup.color == curentCup.color){
         return {...cup, order:cupTarget.order}
      }
      return cup
    } ))
   
    setCurentCup(null)
   }

  
 
  
}