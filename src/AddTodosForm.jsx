import { useState } from "react";
import { useTodos } from "./contexts/TodosProvider";

function AddTodosForm() {
  const { AddNewTodo } = useTodos();

  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    AddNewTodo(newTodo);

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodosForm;
