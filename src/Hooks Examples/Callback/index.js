import { useState, useCallback } from "react";
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(
    (incrementor = 0) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
  };
  return (
    <div align="center">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Toggle theme
      </button>
      <div style={theme}>
        <List getItems={getItems} />
      </div>
    </div>
  );
}
