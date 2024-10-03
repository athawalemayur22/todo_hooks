import { useTodos } from "./contexts/TodosProvider";

function Todo({ id, title, completed }) {
  const { handleDelete, handleToggle } = useTodos();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#aa99a1",
        color: "#ffffff",
        borderRadius: "10px",
      }}
    >
      <h4>id : {id}</h4>
      <h5>title : {title}</h5>
      <h5 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        completed : {completed ? "true" : "false"}
      </h5>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleToggle(id);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Todo;
