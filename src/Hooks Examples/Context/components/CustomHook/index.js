import { ThemeProvider } from "./ThemeContext";
import FunctionContextComponent from "./FunctionContextComponent";

export default function CustomHook() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
