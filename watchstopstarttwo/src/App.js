import "./App.css";
import React, { useState, useEffect } from "react";

function App() {

  const [time, settime] = useState(0);
  const [state, setState] = useState(true);

  useEffect(() => {
    if(!state){
      window.interval = setInterval(() => {settime((prev) => prev + 1000)},1000);
    }else{
      clearInterval(window.interval);
    }
    return () => clearInterval(window.interval);
  }, [state]);

  function clearTimeOut() {
    clearInterval(window.interval);
    settime(0);
  }
  return (
    <div className="App">
      <div>
      <h1>Stop watch</h1>
      <p style={{ display: "inline" }}>Time : </p>
      <span>{Math.floor(time / 60000) % 60}</span>:<span>{Math.floor(time / 1000) % 60}</span>
      <br />
      {state ? (
        <button style={{marginRight : "4px"}} onClick={() => setState(false)}>Start</button>
      ) : (
        <button style={{marginRight : "4px"}} onClick={() => setState(true)}>Stop</button>
      )}
      <button onClick={() => clearTimeOut()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
