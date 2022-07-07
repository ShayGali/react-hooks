import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";

import { ThemeProvider } from "./ThemeContext";
export default function CustomHook() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
