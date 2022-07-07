import { useState } from "react";
import UpdateState from "./components/UpdateState";
import FuncInitialState from "./components/FuncInitialState";
import ObjState from "./components/ObjState";

function App() {
  const [example, setExample] = useState("");
  function showExample() {
    switch (example) {
      case "UpdateState":
        return <UpdateState />;
      case "FuncInitialState":
        return <FuncInitialState />;
      case "ObjState":
        return <ObjState />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <div className="example-container">
        <span>Select example:</span>
        <button
          onClick={() => setExample("UpdateState")}
          disabled={example === "UpdateState"}
        >
          UpdateState
        </button>
        <button
          onClick={() => setExample("FuncInitialState")}
          disabled={example === "FuncInitialState"}
        >
          FuncInitialState
        </button>
        <button
          onClick={() => setExample("ObjState")}
          disabled={example === "ObjState"}
        >
          ObjState
        </button>
      </div>
      <div className="example-container">{showExample()}</div>
    </>
  );
}

export default App;
