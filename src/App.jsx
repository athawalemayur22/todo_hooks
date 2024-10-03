import AddTodosForm from "./AddTodosForm";
import Todos from "./Todos";
import TodosProvider from "./contexts/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <AddTodosForm />
      <Todos />
    </TodosProvider>
  );
}

export default App;
