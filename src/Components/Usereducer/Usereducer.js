import React, { useReducer } from "react";
import "./Usereducer.css";

export default function Usereducer(){
  const initialState = 0;
  const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="Main">
      <p className="Text">This is useReducer</p>
      <p>Kelompok 2</p><br />
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={() => dispatch("increment")}>
            Increment
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={() => dispatch("decrement")}>
            Decrement
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={() => dispatch("reset")}>
            Reset
          </button>
        </div>
      </div>
    </div>

  )
}