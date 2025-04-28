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

  let optDate = date.toDateString();

  function handlePreviousStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step < 10) setStep((s) => s + 1);
  }

  return (
    <>
      <div className="step">
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p className="date">
        {count < 0 && `${-count} days ago was ${optDate}`}
        {count === 0 && `Today is ${optDate}`}
        {count > 0 && `${count} days from today is ${optDate}`}
      </p>
    </>
  );
}
