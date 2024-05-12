import {useState} from 'react'
import ButtonsAnswer from '../buttons/buttonsAnswer/ButtonsAnswer'

const Answer = ({arrAnswer}) => {
   const [open, setOpen] = useState<Boolean>(false)
   const onClickOpen =() =>{
    
      setOpen(!open)
   }
  return (
   <>
   <ButtonsAnswer onClick={onClickOpen}>{open ? "закрыть" : "показать"}</ButtonsAnswer>
    <div >
       {
         open &&
            <>
               <ul>
                  {arrAnswer.map(el =>
                     <li  key={el}>{el}</li>
                  
                  )}
               </ul>
               </>
              
            }
    </div>
   </>
   
  )
}

export default Answer
