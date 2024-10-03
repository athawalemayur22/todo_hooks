import { useReducer, createContext, useContext } from "react";
const todoContext = createContext();

function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }
  if (action.type === "TODO_TOGGLED") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
}

const initialTodos = [
  {
    id: 1,
    title: "Gitar",
    completed: true,
  },
  {
    id: 2,
    title: "Piano",
    completed: false,
  },
  {
    id: 3,
    title: "Drum",
    completed: true,
  },
];

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: id,
      },
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "TODO_TOGGLED",
      payload: {
        id: id,
      },
    });
  };

  const AddNewTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        newTodo: newTodo,
      },
    });
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        dispatch,
        handleDelete,
        handleToggle,
        AddNewTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

export function useTodos() {
  return useContext(todoContext);
}

export default TodoProvider;
