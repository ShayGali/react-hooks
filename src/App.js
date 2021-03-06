import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";

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
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import LandPage from "./components/LandPage";

function App() {
  const [hooksExample, setHooksExample] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
        return (
          <LandPage setIsOpen={setIsOpen} setHooksExample={setHooksExample} />
        );
    }
  }

  return (
    <>
      <Navbar
        changeExample={(example) => setHooksExample(example)}
        setIsOpen={setIsOpen}
        setExample={setHooksExample}
        subject={hooksExample}
        subjectSummaryUrl={`https://github.com/ShayGali/react-hooks/blob/master/src/Hooks%20Examples/${hooksExample.replace(
          "use",
          ""
        )}/README.md`}
      />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        changeExample={(example) => setHooksExample(example)}
      />
      <div style={{ flex: 9 }}>
        <h1 style={{ textAlign: "center", marginTop: "1%" }}>{hooksExample}</h1>
        {displayComponent()}
        {hooksExample !== "" && (
          <a
            href={`https://github.com/ShayGali/react-hooks/blob/master/src/Hooks%20Examples/${hooksExample.replace(
              "use",
              ""
            )}/README.md`}
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="ms-5">Link for {hooksExample} summary</h5>
          </a>
        )}
      </div>
    </>
  );
}

export default App;
