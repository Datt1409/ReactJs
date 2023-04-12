import { React, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    return storage ?? [];
  });

  const handleSubmit = () => {
    if (task.trim() !== "") {
      setTasks((prev) => {
        const newTasks = [...prev, task];

        // Save to local storage
        const jsonTask = JSON.stringify(newTasks);
        localStorage.setItem("tasks", jsonTask);

        return newTasks;
      });
      setTask("");
    }
  };

  const handleRemove = () => {
    setTasks([]);
    localStorage.clear();
  };
  const removeOne = (index) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(newTasks));

      return newTasks;
    });
  };

  return (
    <div className="App">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleRemove}>Remove all</button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li
              onClick={() => {
                removeOne(index);
              }}
              key={index}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
