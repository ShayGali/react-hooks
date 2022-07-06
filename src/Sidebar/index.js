import React from "react";

import "./Sidebar.css";
export default function Sidebar({ changeExample }) {
  function clickHandler(e) {
    if (e.target.firstChild.innerHTML)
      changeExample(e.target.firstChild.innerHTML);
    else changeExample(e.target.innerHTML);
  }
  return (
    <div className="container">
      <ul className="list">
        <li className="list-item" onClick={clickHandler}>
          <span>useState</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useEffect</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useMemo</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useRef</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useContext</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useReducer</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useCallback</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useLayoutEffect</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useTransition</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useDeferredValue</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useImperativeHandle</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>useId</span>
        </li>
        <li className="list-item" onClick={clickHandler}>
          <span>custom-hook</span>
        </li>
      </ul>
    </div>
  );
}
