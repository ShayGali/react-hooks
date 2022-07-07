import { useState } from "react";

function ObjState() {
  const [name, setName] = useState({ fName: "Shay", lName: "Gali" });

  function updateSateBad() {
    setName({ fName: "Yossi" });
  }

  function updateSateGood() {
    setName((prevName) => ({ ...prevName, fName: "Yossi" }));
  }

  return (
    <div>
      <p>Your name is: {`${name.fName} ${name.lName}`}</p>
      <button onClick={updateSateGood}>update name(good)</button>
      <button onClick={updateSateBad}>update name(bad)</button>
    </div>
  );
}

export default ObjState;
