import React from "react";

export default function LandPage({ setIsOpen, setHooksExample }) {
  return (
    <>
      <p>Hello, for get start select the hook you want to learn about.</p>
      <p
        style={{
          color: "hotpink",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => setIsOpen(true)}
      >
        Click here for open the hooks menu
      </p>
      <p>
        Or,{" "}
        <span
          style={{
            color: "hotpink",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => setHooksExample("useState")}
        >
          click here for learn about useState
        </span>
        .
      </p>
    </>
  );
}
