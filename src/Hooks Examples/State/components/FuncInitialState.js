import { useState } from "react";

function initState() {
  console.log("init");
  return 0;
}

function FuncInitialState() {
  // const [counter, setCounter] = useState(initState());
  const [counter, setCounter] = useState(() => initState());
  return (
    <div className="page">
      <button
        className="button"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        -
      </button>
      <span> {counter}</span>
      <button
        className="button"
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >
        +
      </button>
    </div>
  );
}

export default FuncInitialState;
