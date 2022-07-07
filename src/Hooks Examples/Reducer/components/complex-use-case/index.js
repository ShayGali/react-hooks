import { useReducer, useState } from "react";

const ACTIONS = {
  ADD: "add",
  DECREMENT: "decrement",
  COMPLETED: "completed",
  DELETE: "delete",
};

export default function ComplexExample() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD:
        return [...state, newTodo(action.payload.name)];
      case ACTIONS.COMPLETED:
        return state.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        );
      case ACTIONS.DELETE:
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    setName("");
  }
  function newTodo(name) {
    return { id: Date.now(), name: name, completed: false };
  }

  return (
    <div style={{ flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.completed ? "green" : "red" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.COMPLETED, payload: { id: todo.id } })
        }
      >
        completed
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
};
