import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Stopwatch from "./stopwatch";

export const AddChoreForm = () => {
  const { store, actions } = useContext(Context);
  const [chore, setChore] = useState();
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();
  // this is for the stopwatch 
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);  

const startAndStopTimer = () => {
  let interval;
  setRunning(true);
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  
}
  

  const resetTimeAndSetDuration = () =>{
    setTime(0);
    setDuration(time);
  }

//stopwatch function ends here

  function addChore() {
    actions.setEmail();
    if (chore && date && duration) {
      actions.setChoreList(chore, date, duration);
    }
  }



  // useEffect(() => {
  //   actions.setEmail();
  // });

  return (
    <div>
    <form className="add-a-chore">
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          value={chore || ""}
          onChange={(e) => setChore(e.target.value)}
        >
          <option value>Select a chore</option>
          <option value="Dishes">Dishes</option>
          <option value="Laundry">Laundry</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <input
          type="time"
          className="form-control"
          value={duration || ""}
          onChange={(e) => setDuration(e.target.value)}
        ></input>
      </div>
      {/* start of stopwatch section here */}
      <div>
         <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button className="btn btn-primary" onClick={() => startAndStopTimer()}>Start</button>
        <button className="btn btn-primary" onClick={() => startAndStopTimer()}>Stop</button>
        <button className="btn btn-primary" onClick={() => setTime(0)}>Reset</button>       
      </div>
    </div>
    </div>
    {/* end of stopwatch section here */}
      <button type="button" className="btn btn-primary" onClick={addChore}>
        Add a chore
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => actions.deleteAllChores()}
      >
        Clear List
      </button>
    
    </form>
   
    </div>
  );
};
