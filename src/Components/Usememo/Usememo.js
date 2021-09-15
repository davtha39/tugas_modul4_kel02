import React, { useState, useMemo } from "react";
import "./Usememo.css";

export default function Usememo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="Main">
    <p className="Text">This is useMemo</p>
    <p>Kelompok 2</p><br />
      <div className="ViewButton2">
        <button className="Button" onClick={incrementOne}>
          Count One - {counterOne}
        </button><br />
        <span className="Text">{isEven ? "Even" : "Odd"}</span>
      </div>
      <div className="ViewButton1">
        <button className="Button" onClick={incrementTwo}>
          Count Two - {counterTwo}
        </button>
      </div>
    </div>
  );
}
