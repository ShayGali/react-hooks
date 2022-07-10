import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("update items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
