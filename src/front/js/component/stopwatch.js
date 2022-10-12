import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";


function Stopwatch() {
const { store, actions } = useContext(Context);

const setTimeToDuration = () => {
    actions.setDuration(time);
    setTime(0);
};


const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);  

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


  return (
    <div>
         <div className="stopwatch">
      <div className="numbers">
      <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        {/*decimals below*/}
        {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
      </div>
      <div className="buttons">
        <button className="btn btn-primary m-1" onClick={() => setRunning(true)}>Start</button>
        <button className="btn btn-primary m-1" onClick={() => setRunning(false)}>Stop</button>
        <button className="btn btn-primary m-1" onClick={() => setTimeToDuration(0)}>Complete Chore</button>       
        <button className="btn btn-primary m-1" onClick={() => setTime(0)}>Reset Only</button>       
      </div>
    </div>
    </div>
  )
}

export default Stopwatch