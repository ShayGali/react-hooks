import React from "react";
import { useState } from "react";

export default function WithoutUseTransition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }
  return (
    <div align="center">
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
