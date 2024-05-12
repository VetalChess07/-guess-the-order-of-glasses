import React, { FC, useState } from 'react'
import type { ModalTypeProps } from './type'

import style from "./style.module.scss"

const {modal, inner} = style

const Modal:FC<ModalTypeProps> = ({children, setF, state}) => {
   const onClickModalCLose = (event) =>{
      event.stopPropagation()
      setF(false)
   }

  return (
   <>
    {state && <div onClick={(e)=> onClickModalCLose(e)} className={inner}>
      <div onClick={(event) => event.stopPropagation()} className={modal}>
         {children}
      </div>
    </div>}
   </>
     
   
   
  )
}

export default Modal
