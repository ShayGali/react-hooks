import React from "react";
import { useEffect } from "react";
import { useMemo, useDeferredValue } from "react";

export default function List({ input }) {
  const LIST_SIZE = 20000;

  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++)
      l.push(<div key={i}>{deferredValue}</div>);

    return l;
  }, [deferredValue]);

  useEffect(
    () => console.log(`input=${input}\ndeferredValue=${deferredValue}`),
    [input, deferredValue]
  );
  return list;
}
