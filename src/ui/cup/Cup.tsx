import {FC} from 'react'

import type { CupType } from '../../type/cup'

import style from "./style.module.scss"

const {cupClass, active} = style

const Cup:FC<CupType> = ({cup, className,onClickCupReplace,dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dragDropHandler}) => {
  return (
    <div className={className ? `${cupClass} + ${active}` :cupClass}
    style={{background:cup.color}}
    onDragStart={(e) => dragStartHandler(e, cup)}
    onDragLeave={dragLeaveHandler}
    onDragEnd={dragEndHandler}
    onDragOver={dragOverHandler}
    onDrop={(e) => dragDropHandler(e, cup)}
    draggable={true}
    onClick={(e)=>onClickCupReplace(e, cup)}
    >
      
    </div>
  )
}

export default Cup
