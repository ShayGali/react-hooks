import React, { useState, createContext } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = createContext();

export default function SimpleWay() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

/*
יש לנו פוביידר ו ערך
לכל הילדים בעץ יהיה את היכולת לקבל את הערך
*/
