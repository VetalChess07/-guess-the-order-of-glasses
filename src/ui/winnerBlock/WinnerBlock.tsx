import React from 'react'

import style from "./style.module.scss"

import ButtonsRestartGame from '../buttons/buttonsRestartGame/ButtonsRestartGame'

const {winner, tilte, text, span} = style

const WinnerBlock = ({countAttempts}) => {
  return (
    <div className={winner}>
      <h2 className={tilte} >ты победил!</h2>
      <p className={text}>
         ты справился за <span className={span}>{countAttempts}</span>  попыток!
      </p>
     
    </div>
  )
}

export default WinnerBlock
