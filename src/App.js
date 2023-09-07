import React, {useState} from "react";
import "./App.css";

function App() {
  let [status, setStatus]= useState(false);
  return (
    <div className="App">
      <div className="inputOuter">
        <h2> Show | Hide Password</h2>
        <input type={(status)? 'text':'password'}></input>
        <button onClick={()=>setStatus(!status)}>
        {(status)? 'hide':'show'}
        </button>
      </div>
    </div>
  );
}

export default App;
