import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="step">
        <input
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
          type="range"
          min="1"
          max="10"
        ></input>
        <span>Step: {step}</span>
      </div>

      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input onChange={(e) => setCount(Number(e.target.value))} type="text" value={count}></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p className="date">
        {count < 0 && `${-count} days ago was ${date.toDateString()}`}
        {count === 0 && `Today is ${date.toDateString()}`}
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
