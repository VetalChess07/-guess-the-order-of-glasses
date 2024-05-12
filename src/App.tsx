import {useState, useEffect} from 'react';
import './App.css';
import InnerGame from './components/innerGame/InnerGame';
import WinnerBlock from './ui/winnerBlock/WinnerBlock';
import StartGame from './components/startGame/StartGame';
import { colorsArr } from './utils/colors';
import Settings from './components/settings/Settings';
import { setDataLSFn } from './utils/setLSData';


function App() {
  const [dataGame, setDataGame] = useState([])
  const [arrColors, setArrColors] = useState(colorsArr)
  const [currectArr, setCurrectArr] = useState([])
  const [countCurrect, setCountCurrect] = useState(0);
  const [counterAttempts, setCounterAttempts] = useState<number>(0)
  const [startGameArr, setStartGameArr ] = useState([])

  const onClickRestart = ()=>{
    setStartGameArr([])
    setCountCurrect(0)
    setCounterAttempts(1)
    setArrColors(colorsArr)
    console.log(dataGame)
    
    setDataLSFn(dataGame)
  
   
  }
 


  return (
    <>
     <div className="App">
      
      {
        arrColors.length !== 0
        ?  <StartGame setDataGame={setDataGame}  setCurrectArr={setCurrectArr} arrColors={arrColors} setArrColors={setArrColors} startGameArr={startGameArr} setStartGameArr={setStartGameArr} />
        : countCurrect === currectArr.length 
        ? 
        <>
          <WinnerBlock dataGame={dataGame} setDataGame={setDataGame} onClickRestart={onClickRestart} countAttempts={counterAttempts} /> 
        </>
        :  <InnerGame counterAttempts={counterAttempts} startArr={startGameArr} arrTruf={currectArr} setCounterAttempts={setCounterAttempts} countCurrect={countCurrect} setCountCurrect={setCountCurrect} />

      }
      
    </div>
    <Settings dataGame={dataGame} />
    </>
   
  );
}

export default App;
