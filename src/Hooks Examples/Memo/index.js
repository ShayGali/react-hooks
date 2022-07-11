import { useState } from "react";
import GoodThemeExample from "./components/GoodThemeExample";
import ReferentialEquality from "./components/ReferentialEquality";
import SlowThemeExample from "./components/SlowThemeExample";
function App() {
  const [example, setExample] = useState("");

  function showExample() {
    switch (example) {
      case "SlowThemeExample":
        return <SlowThemeExample />;
      case "GoodThemeExample":
        return <GoodThemeExample />;
      case "ReferentialEquality":
        return <ReferentialEquality />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <div className="example-container">
        <span>Select example:</span>
        <button
          onClick={() => setExample("SlowThemeExample")}
          disabled={example === "SlowThemeExample"}
        >
          SlowThemeExample
        </button>
        <button
          onClick={() => setExample("GoodThemeExample")}
          disabled={example === "GoodThemeExample"}
        >
          GoodThemeExample
        </button>
        <button
          onClick={() => setExample("ReferentialEquality")}
          disabled={example === "ReferentialEquality"}
        >
          ReferentialEquality
        </button>
      </div>
      <div align="center" className="mt-2">
        {showExample()}
      </div>
    </>
  );
}

export default App;
