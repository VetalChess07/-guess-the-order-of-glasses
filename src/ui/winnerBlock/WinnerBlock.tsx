import React from 'react'

import style from "./style.module.scss"


const {winner, tilte, text, span} = style

const WinnerBlock = ({countAttempts, onClickRestart, setDataGame, dataGame}) => {

  const onClickRestartGame = ()=>{
     onClickRestart()
    setDataGame(prev => {
      const newDataGame = [...prev, countAttempts];
      return newDataGame;
    });
  
  }

  return (
    <div className={winner}>
      <h2 className={tilte} >ты победил!</h2>
      <p className={text}>
         ты справился за <span className={span}>{countAttempts}</span>  попыток!
      </p>
      <button onClick={onClickRestartGame} >по новой!</button>
    </div>
  )
}

export default WinnerBlock
