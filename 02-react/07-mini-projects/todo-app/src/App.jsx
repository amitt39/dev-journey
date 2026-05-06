import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [tasks, setTask] = useState([
    { id: 101, name: "Go to gym" },
    { id: 102, name: "Go for shopping" },
    { id: 103, name: "Learn react" },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <TodoItem todo={task} key={task.id} onDelete={setTask} />
      ))}
    </>
  );
}

export default App;
