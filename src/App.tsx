import {useState, useEffect} from 'react';
import './App.css';
import InnerGame from './components/innerGame/InnerGame';
import WinnerBlock from './ui/winnerBlock/WinnerBlock';
import StartGame from './components/startGame/StartGame';
import { colorsArr } from './utils/colors';


function App() {
  const [arrColors, setArrColors] = useState(colorsArr)
  const [currectArr, setCurrectArr] = useState([])
  const [countCurrect, setCountCurrect] = useState(0);
  const [counterAttempts, setCounterAttempts] = useState<number>(0)
  const [startGameArr, setStartGameArr ] = useState([])


console.log(currectArr + ' c')
  const onClick = ()=>{
    setStartGameArr([])
    setCountCurrect(0)
    setCounterAttempts(1)
    setArrColors(colorsArr)
   
  }


  return (
    <div className="App">
      
      {
        arrColors.length !== 0
        ?  <StartGame  setCurrectArr={setCurrectArr} arrColors={arrColors} setArrColors={setArrColors} startGameArr={startGameArr} setStartGameArr={setStartGameArr} />
        : countCurrect === currectArr.length 
        ? 
        <>
          <WinnerBlock countAttempts={counterAttempts} /> 
          <button onClick={onClick} >по новой!</button>
        </>
        :  <InnerGame counterAttempts={counterAttempts} startArr={startGameArr} arrTruf={currectArr} setCounterAttempts={setCounterAttempts} countCurrect={countCurrect} setCountCurrect={setCountCurrect} />

      }
    </div>
  );
}

export default App;
