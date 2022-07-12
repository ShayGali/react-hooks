import { useMemo, useDeferredValue ,useEffect} from "react";

export default function List({ input }) {
  const LIST_SIZE = 20000;

  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => { // memoizing the list, will change only when the deferredValue will cahnge
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++)
      l.push(<div key={i}>{deferredValue}</div>);

    return l;
  }, [deferredValue]);

  useEffect( // for see the changes in the input value and the deferred value
    () => console.log(`input=${input}\ndeferredValue=${deferredValue}`),
    [input, deferredValue]
  );


  return list; // the JSX
}
