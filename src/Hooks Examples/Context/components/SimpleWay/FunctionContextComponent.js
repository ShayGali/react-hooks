import React, { useContext } from "react";
import { ThemeContext } from "./index";
export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <div style={theme}>Function Theme</div>
    </>
  );
}
