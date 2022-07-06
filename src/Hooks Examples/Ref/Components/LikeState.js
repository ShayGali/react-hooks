import { useEffect, useRef, useState } from "react";

export default function LikeState() {
  //   const [renderCount, setRenderCount] = useState(0);
  // לופ אינסופי
  //   useEffect(() => {
  //     setRenderCount((prevCount) => prevCount + 1);
  //   });

  const [name, setName] = useState("");
  const renderCount = useRef(0); // object -> {current:0}
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I render {renderCount.current} times</div>
    </>
  );
}
