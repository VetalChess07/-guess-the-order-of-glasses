import {useState, useEffect} from 'react';
import './App.css';
import InnerGame from './components/innerGame/InnerGame';
import WinnerBlock from './ui/winnerBlock/WinnerBlock';
import StartGame from './components/startGame/StartGame';

import { startGame } from './utils/startGame';





function App() {
  const [arrColors, setArrColors] = useState([
    {color:'red', order: 1},
    {color:'yellow', order: 2},
    {color: 'green', order:3},
    {color:'blue', order:4},
    ])
  const [currectArr, setCurrectArr] = useState([])
  const [countCurrect, setCountCurrect] = useState(0);
  const[counterAttempts, setCounterAttempts] = useState<number>(0)
  const [startGameArr, setStartGameArr ] = useState([])

  

  const onClick = ()=>{
    setStartGameArr([])
    setCountCurrect(0)
    setCounterAttempts(1)
    setArrColors([{color:'red', order: 1},
    {color:'yellow', order: 2},
    {color: 'green', order:3},
    {color:'blue', order:4},])
    setCurrectArr(startGame())
  }
  useEffect(()=>{
    setCurrectArr(startGame())
  },[])

  return (
    <div className="App">
      {
        countCurrect === currectArr.length 
        ? 
        <>
          <WinnerBlock countAttempts={counterAttempts} /> 
          <button onClick={onClick} >по новой!</button>
        </>
        :  <InnerGame startArr={startGameArr} arrTruf={currectArr} setCounterAttempts={setCounterAttempts} countCurrect={countCurrect} setCountCurrect={setCountCurrect} />

      }
     <StartGame arrColors={arrColors} setArrColors={setArrColors} startGameArr={startGameArr} setStartGameArr={setStartGameArr} />
    </div>
  );
}

export default App;
