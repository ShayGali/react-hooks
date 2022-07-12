import { useState } from "react";
import List from "./components/List";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div align="center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <List input={input} />
    </div>
  );
}
