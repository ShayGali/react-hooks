import { useState } from "react";
import SimpleExample from "./components/start";
import ComplexExample from "./components/complex-use-case";

export default function App() {
  const [example, setExample] = useState("");
  function showExample() {
    switch (example) {
      case "SimpleExample":
        return <SimpleExample />;
      case "ComplexExample":
        return <ComplexExample />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <div className="example-container">
        <span>Select example:</span>
        <button
          onClick={() => setExample("SimpleExample")}
          disabled={example === "SimpleExample"}
        >
          SimpleExample
        </button>
        <button
          onClick={() => setExample("ComplexExample")}
          disabled={example === "ComplexExample"}
        >
          ComplexExample
        </button>
      </div>
      <div className="example-container">{showExample()}</div>
    </>
  );
}
