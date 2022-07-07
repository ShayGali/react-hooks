import { Button } from "react-bootstrap";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export default function WithUseReducer() {
  //
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <>
      <Button variant="secondary" size="sm" onClick={decrement}>
        -
      </Button>
      <span className="m-2"> {state.count}</span>
      <Button variant="secondary" size="sm" onClick={increment}>
        +
      </Button>
    </>
  );
}
