import { useState } from "react";

import Sidebar from "./Sidebar";

import State from "./Hooks Examples/State";
import Effect from "./Hooks Examples/Effect";
import Memo from "./Hooks Examples/Memo";
import Ref from "./Hooks Examples/Ref";
import Callback from "./Hooks Examples/Callback";
import Context from "./Hooks Examples/Context";
import DeferredValue from "./Hooks Examples/DeferredValue";
import Id from "./Hooks Examples/Id";
import ImperativeHandle from "./Hooks Examples/ImperativeHandle";
import LayoutEffect from "./Hooks Examples/LayoutEffect";
import Reducer from "./Hooks Examples/Reducer";
import Transition from "./Hooks Examples/Transition";
import CustomHook from "./Hooks Examples/custom-hooks";

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
      case "useCallback":
        return <Callback />;
      case "useContext":
        return <Context />;
      case "useDeferredValue":
        return <DeferredValue />;
      case "useId":
        return <Id />;
      case "useImperativeHandle":
        return <ImperativeHandle />;
      case "useLayoutEffect":
        return <LayoutEffect />;
      case "useReducer":
        return <Reducer />;
      case "useTransition":
        return <Transition />;
      case "custom-hooks":
        return <CustomHook />;
      default:
        return <p>Select Hook Example</p>;
    }
  }

  function getPathForSummary() {
    if (hooksExample === "custom-hooks") return hooksExample;

    return hooksExample.slice(3, hooksExample.length);
  }
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar changeExample={(example) => setHooksExample(example)} />
      <div style={{ flex: 9 }}>
        <h1 style={{ textAlign: "center" }}>{hooksExample}</h1>
        {displayComponent()}
        {hooksExample !== "" && (
          <a
            href={`https://github.com/ShayGali/react-hooks/blob/master/src/Hooks%20Examples/${getPathForSummary()}/README.md`}
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
