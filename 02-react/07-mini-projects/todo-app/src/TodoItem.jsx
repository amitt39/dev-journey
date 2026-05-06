function TodoItem({ todo, onDelete }) {
  return (
    <>
      <h1>
        {todo.name}
        <button
          onClick={() =>
            onDelete((prev) =>
              prev.filter((prevTask) => prevTask.id !== todo.id),
            )
          }
        >
          Delete
        </button>
      </h1>
    </>
  );
}
export default TodoItem;
