import { useState } from "react";

import Sidebar from "./Sidebar";
import State from "./Hooks Examples/State";
import Effect from "./Hooks Examples/Effect";

function App() {
  const [hooksExample, setHooksExample] = useState("");

  function displayComponent() {
    switch (hooksExample) {
      case "useState":
        return <State />;
      case "useEffect":
        return <Effect />;
      default:
        return <p>select example</p>;
    }
  }
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar changeExample={(example) => setHooksExample(example)} />
      <div style={{ flex: 9 }}>{displayComponent()}</div>
    </div>
  );
}

export default App;
