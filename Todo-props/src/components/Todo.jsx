import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  // Delete Task
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial"
    }}>
      
      <h1>📝 Todo App</h1>

      {/* Input Box */}
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          backgroundColor: "white",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      <button
        onClick={addTodo}
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              marginTop: "15px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "350px",
              margin: "15px auto",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {todo}

            <button
              onClick={() => deleteTodo(index)}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
