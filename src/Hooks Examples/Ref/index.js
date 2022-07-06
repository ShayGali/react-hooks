import { useState } from "react";
import LikeState from "./Components/LikeState";
import PervValueOfState from "./Components/PervValueOfState";
import ReferenceElement from "./Components/ReferenceElement";

function App() {
  const [example, setExample] = useState("");

  function showExample() {
    switch (example) {
      case "LikeState":
        return <LikeState />;
      case "PervValueOfState":
        return <PervValueOfState />;
      case "ReferenceElement":
        return <ReferenceElement />;
      default:
        return null;
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
          onClick={() => setExample("ReferenceElement")}
          disabled={example === "ReferenceElement"}
        >
          ReferenceElement
        </button>
        <button
          onClick={() => setExample("LikeState")}
          disabled={example === "LikeState"}
        >
          LikeState
        </button>
        <button
          onClick={() => setExample("PervValueOfState")}
          disabled={example === "PervValueOfState"}
        >
          PervValueOfState
        </button>
      </div>
      {showExample()}
    </>
  );
}

export default App;
