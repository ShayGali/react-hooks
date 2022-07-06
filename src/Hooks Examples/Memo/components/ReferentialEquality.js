import { useState, useMemo, useEffect } from "react";

export default function ReferentialEquality() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const themeStyle = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed!");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyle}>{number}</div>
    </>
  );
}
