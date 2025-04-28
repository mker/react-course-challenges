// import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <>
      <div className="step">
        <button>-</button>
        <span>Step: </span>
        <button>+</button>
      </div>
      <div className="count">
        <button>-</button>
        <span>Count: </span>
        <button>+</button>
      </div>
    </>
  );
}
