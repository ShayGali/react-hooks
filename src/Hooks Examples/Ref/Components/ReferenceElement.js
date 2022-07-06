import { useRef, useState } from "react";
export default function ReferenceElement() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    // console.log(inputRef);
    // console.log(inputRef.current);
    inputRef.current.focus();

    // ! לא טוב - הוא לא מעדכן את הסטייט
    // inputRef.current.value = "some value";
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
