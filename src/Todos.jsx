import Todo from "./Todo";
import { useTodos } from "./contexts/TodosProvider";

function Todos() {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo) => {
        return <Todo {...todo} key={todo.id} />;
      })}
    </>
  );
}

export default Todos;
