import React from 'react';
import './App.css';
import InnerGame from './components/innerGame/InnerGame';


function App() {
  const arrTruf = ["blue", "green",'yellow','red']
  arrTruf.sort(() => Math.random() - 0.5);
  return (
    <div className="App">
      <InnerGame arrTruf={arrTruf}/>
    </div>
  );
}

export default App;
