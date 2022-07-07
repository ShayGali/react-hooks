import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

// הוק משלנו כדי להקל עלינו עם השימוש
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(UpdateThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
