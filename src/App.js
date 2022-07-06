import { useState } from "react";

import Sidebar from "./Sidebar";
import State from "./Hooks Examples/State";
import Effect from "./Hooks Examples/Effect";
import Memo from "./Hooks Examples/Memo";
import Ref from "./Hooks Examples/Ref";

function App() {
  const [hooksExample, setHooksExample] = useState("");

  function displayComponent() {
    switch (hooksExample) {
      case "useState":
        return <State />;
      case "useEffect":
        return <Effect />;
      case "useMemo":
        return <Memo />;
      case "useRef":
        return <Ref />;
      default:
        return <p>Select Hook Example</p>;
    }
  }

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar changeExample={(example) => setHooksExample(example)} />
      <div style={{ flex: 9 }}>
        <h1 style={{ textAlign: "center" }}>{hooksExample}</h1>
        {displayComponent()}
        {hooksExample !== "" && (
          <a
            href={`https://github.com/ShayGali/react-hooks/blob/master/src/Hooks%20Examples/${hooksExample.slice(
              3,
              hooksExample.length
            )}/README.md`}
            target="_blank"
            rel="noreferrer"
          >
            <h3>Link for summary</h3>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
