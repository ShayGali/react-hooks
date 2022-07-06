import React from "react";

import "./Sidebar.css";
export default function Sidebar({ changeExample }) {
  function clickHandler(e) {
    changeExample(e.target.innerHTML);
  }
  return (
    <div className="container">
      <ul className="list">
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            useState
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            useEffect
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            useMemo
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            useRef
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            Bookmarks
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            Questions
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            Jobs
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            Events
          </span>
        </li>
        <li className="list-item">
          <span className="list-item-text" onClick={clickHandler}>
            Courses
          </span>
        </li>
      </ul>
    </div>
  );
}
