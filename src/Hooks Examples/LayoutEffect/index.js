import { useState, useEffect, useRef } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    for (let i = 0; i < 1000000000; i++) {}
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div align="center">
      <h3 className="text-muted">In this section its better to read the summary</h3>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        click
      </button>
      {show && (
        <div
          align="center"
          style={{ position: "absolute", left: "50%" }}
          ref={popup}
        >
          this is a popup
        </div>
      )}
    </div>
  );
}
