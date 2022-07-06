import { useState, useEffect } from "react";

export default function Simple() {
  const [resource, setResource] = useState("posts");

  const [items, setItems] = useState([]);
  //   useEffect(() => {
  //     console.log("every time that the func render");
  //   });
  //   useEffect(() => {
  //     console.log("first time (onMount)");
  //   }, []);

  useEffect(() => {
    console.log("when resource is changed");
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resource]);

  return (
    <>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>Comments</button>
      </div>
      <h1>{resource}</h1>
      {items.map((item) => (
        <pre key={Math.random()}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}
