import React from "react";
import SimpleHook from "./components/SimpleWay";
import CustomHook from "./components/CustomHook";

export default function App() {
  return (
    <div align="center">
      <h5>first example</h5>
      <SimpleHook />
      <h5>second example</h5>
      <CustomHook />
    </div>
  );
}

/*
יש לנו פוביידר ו ערך
לכל הילדים בעץ יהיה את היכולת לקבל את הערך
*/
