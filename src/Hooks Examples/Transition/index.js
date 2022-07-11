import { useState } from "react";

import UseTransitionExample from "./components/UseTransition";
import WithoutUseTransition from "./components/WithoutUseTransition";

export default function App() {
  const [example, setExample] = useState("");
  function showExample() {
    switch (example) {
      case "UseTransitionExample":
        return <UseTransitionExample />;
      case "WithoutUseTransition":
        return <WithoutUseTransition />;
      default:
        return <></>;
    }
  }
  return (
    <div align="center">
      <span>Select example:</span>
      <button
        onClick={() => setExample("UseTransitionExample")}
        disabled={example === "UseTransitionExample"}
      >
        With useTransition
      </button>
      <button
        onClick={() => setExample("WithoutUseTransition")}
        disabled={example === "WithoutUseTransition"}
      >
        Without useTransition (stuck a bit)
      </button>
      <div className="mt-3">{showExample()}</div>
    </div>
  );
}
