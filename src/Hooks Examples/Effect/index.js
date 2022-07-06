import { useState } from "react";
import Simple from "./components/Simple";
import WindowExample from "./components/WindowExample";

function App() {
  const [example, setExample] = useState("");

  function showExample() {
    switch (example) {
      case "Simple":
        return <Simple />;
      case "WindowExample":
        return <WindowExample />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 50,
        }}
      >
        <span>Select example:</span>
        <button
          onClick={() => setExample("Simple")}
          disabled={example === "Simple"}
        >
          Simple
        </button>
        <button
          onClick={() => setExample("WindowExample")}
          disabled={example === "WindowExample"}
        >
          WindowExample
        </button>
        <button onClick={() => setExample("")} disabled={example === ""}>
          UnMount
        </button>
      </div>
      {showExample()}
    </>
  );
}

export default App;
