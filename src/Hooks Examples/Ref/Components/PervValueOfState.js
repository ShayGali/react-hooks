import { useRef, useState, useEffect } from "react";

export default function PervValueOfState() {
  const [name, setName] = useState("");
  const prevName = useRef(name);

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>My previous name is {prevName.current}</div>
    </>
  );
}
