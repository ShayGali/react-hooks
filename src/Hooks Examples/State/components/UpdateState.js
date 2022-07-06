import { useState } from "react";

function UpdateState() {
  const [counter, setCounter] = useState(0);

  // why not use setCount(count -1)
  // although we decrement twice, it will decrement only one
  function decrementTwoCount() {
    // גרוע יפחית רק פעם אחת
    // setCounter(counter - 1)
    // setCounter(counter - 1)

    // ככה הוא יפחית פעמיים
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  }

  function incrementTwoCount() {
    // גרוע - יוסיף רק פעם אחת
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // ככה הוא יפחית פעמיים
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="page">
      <button className="button" onClick={decrementTwoCount}>
        -
      </button>
      <span> {counter}</span>
      <button className="button" onClick={incrementTwoCount}>
        +
      </button>
    </div>
  );
}

export default UpdateState;
