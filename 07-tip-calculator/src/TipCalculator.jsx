import "./style.css";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentYou, setPercentYou] = useState(0);
  const [percentFriend, setPercentFriend] = useState(0);

  const tip = bill * ((percentYou + percentFriend) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentYou(0);
    setPercentFriend(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentYou} onSelect={setPercentYou}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentFriend} onSelect={setPercentFriend}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <div className="total">
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div className="reset">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
