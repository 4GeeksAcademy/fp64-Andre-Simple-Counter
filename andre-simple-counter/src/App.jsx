import { useState } from 'react';
import  '../public/spaceship.gif';
import './App.css';

function App() {
  let [counterState, setCounterState] = useState(0);
  let [intervalId, setIntervalId] = useState(0);

  const StartCount = () => {
    let newIntervalID = setInterval(() => {
      setCounterState((counterState) => counterState + 1);
    }, 1000);

    setIntervalId(newIntervalID);
  };

  const StopCount = () => {
    clearInterval(intervalId);
  }

  const ResetCount = () => {
    setCounterState(0);
  };


  return (
    <>
      <div className="App">
        <h1>Timer: {counterState}</h1>
        <button onClick={ResetCount}>Reset</button> <button onClick={StartCount}> Start </button>{' '}
        <button onClick={StopCount}>Stop</button>
      </div>
      <img src='../spaceship.gif' alt="loading..." />
    </>
  );
}

export default App;
