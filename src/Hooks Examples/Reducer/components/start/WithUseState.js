import { Button } from "react-bootstrap";
import { useState } from "react";

export default function WithUseState() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3%",
      }}
    >
      <Button variant="secondary" size="sm" onClick={decrement}>
        -
      </Button>
      <span className="m-2"> {counter}</span>
      <Button variant="secondary" size="sm" onClick={increment}>
        +
      </Button>
    </div>
  );
}
